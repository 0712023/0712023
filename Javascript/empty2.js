//global initializing
flow.set('batch', 0);
flow.set('data',{});
flow.set('stop',0);
flow.set('m11_power', -1);
flow.set('m11_alarm', -1);
flow.set('client',0);
flow.set('dataabc','');

var wo98 = [];
for(i=0;i<99;i++){
    wo98[i] = undefined;
}
flow.set('wo98', wo98);
flow.set('rack', {});

//npm install mqtt --save
var require = global.get('require');
var mqtt = require('mqtt');

var options = {
  host: '20.1.1.9',
  port: 1774
  //host: 'localhost',
  //port: 1883
  //protocol: 'mqtts',
  //username:"steve",
  //password:"password"
};

var client = mqtt.connect(options);

//connected
client.on("connect", () => {
  msg.payload = "mqtt connected "+options.host+':'+options.port;
  node.send(msg);
})

//error
client.on("error", (error) => {
  msg.payload = "Can't connect "+options.host+':'+options.port;
  console.log(error);
  node.send(msg);
})

flow.set('client', client);
