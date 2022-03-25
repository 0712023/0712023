var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();
var recent_high = 0;
var recent_low = 1000000000000;

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    onError(connection);
    onClose(connection);
    onMessage(connection);
    
    if (connection.connected) {
        connection.sendUTF('{"op":"subscribe","args":["trade.BTCUSD"]}')
    }

});

client.connect('wss://stream.bybit.com/realtime');

//에러 발생 시
let onError = (connection) => {
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
}

//종료 시
let onClose = (connection) => {
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
}

//메세지 수신 시
let onMessage = (connection) => {
    connection.on('message', (message) => {
        if (message.type === 'utf8') {
            let response = JSON.parse(message.utf8Data);
            if(response.success === 'true') console.log('subscribtion successful!')
            else if(response.data != undefined) {
                let last_price = response.data[0].price;
                if(recent_high < last_price) recent_high = last_price;
                if(recent_low > last_price) recent_low = last_price;
                console.log('price : ', last_price,'  \t전고점 : ', recent_high, '\t전저점 : ', recent_low)
            }
            //connection.close()
        }
    });
}