const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

var mysql_dbc = require('./db/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();

io.use((socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      socket.username = session.username;
      return next();
    }
  }
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.sessionID = username;
  socket.userID = username;
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  // persist session
  sessionStore.saveSession(socket.sessionID, {
    userID: socket.userID,
    username: socket.username,
    connected: true,
  });

  // emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  // join the "userID" room
  socket.join(socket.userID);

  // fetch existing users
  const users = [];
  const messagesPerUser = new Map();

  connection.query(`SELECT * FROM messages WHERE to_id='`+socket.userID+`' OR from_id='`+socket.userID+`'`,(err, rows)=>{
    if (!err) {console.log(err)}
    rows.forEach((messageRow)=>{
      const message = {content: messageRow.content, from: messageRow.from_id, to: messageRow.to_id}
      const { from, to } = message;
      const otherUser = socket.userID === from ? to : from;
      if (messagesPerUser.has(otherUser)) {
        messagesPerUser.get(otherUser).push(message);
      } else {
        messagesPerUser.set(otherUser, [message]);
      }

    });

    //여기에 멤버id 혹은 admin id를 통해 불러온 adid와 memberlist를 합쳐 리스트를 만드는게 맞다.
    Array.from(messagesPerUser.keys()).forEach((userID) => {

      let connectedStatus = false;
      try {
        connectedStatus = sessionStore.findAllSessions().find(element => element.userID == userID).connected;
      } catch (error) {error}
      users.push({
        userID: userID,
        username: userID,
        connected: connectedStatus,
        messages: messagesPerUser.get(userID) || [],
      });

    });

    sessionStore.findAllSessions().forEach((session)=>{
      if (!users.find(element => element.userID == session.userID)) {
        console.log(session.userID);
        users.push({
          userID: session.userID,
          username: session.userID,
          connected: session.connected,
          messages:[]
        })
      }
    })

    console.log(users);
    socket.emit("users", users);
  })

  socket.broadcast.emit("user connected", {
    userID: socket.userID,
    username: socket.username,
    connected: true,
    messages: [],
  });

  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on("private message", ({ content, to }) => {
    const message = {
      content,
      from: socket.userID,
      to,
    };
    socket.to(to).to(socket.userID).emit("private message", message);
    //메세지 저장부분 - 여길 db 연결 링크로 사용하면 된다.
    connection.query(`INSERT INTO messages (content, from_id, to_id, created) VALUES ('`+content+`','`+socket.userID+`','`+to+`',`+Date.now()+`)`,(err)=>{
      if (!err) {console.log(err)}
    })
  });

  // notify users upon disconnection
  socket.on("disconnect", async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.userID);
      // update the connection status of the session
      sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        username: socket.username,
        connected: false,
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
