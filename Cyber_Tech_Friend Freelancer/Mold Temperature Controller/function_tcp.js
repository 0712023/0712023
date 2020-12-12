var require = global.get('require');

// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();

// open connection to a tcp line
client.connectTCP("127.0.0.1", { port: 10502 });
client.setID(1);

// read the values of 1 registers starting at address 1003
// on device number 1. and log the values to the console.

setInterval(function() {
    client.readHoldingRegisters(0x03EB, 1, function(err, data) {
        flow.set('tcp_data', data.data) ; //'tcp_data'를 전역변수로 설정하여 값을 저장
    });
}, 1000);
