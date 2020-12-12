//npm install mqtt --save
var require = global.get('require');
var mqtt = require('mqtt');

var options = {
  host: '127.0.0.1',
  port: 1883
  //protocol: 'mqtts',
  //username:"steve",
  //password:"password"
};

var client = mqtt.connect(options);

//connected
client.on("connect", () => {
  console.log("connected "+ client.connected);
})

//error
client.on("error", (error) => {
  console.log("Can't connect " + error);
})

var topic = 'machine' ;
var message = String(msg.payload) ;

client.publish(topic, message)
