var require = global.get('require');

// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();

// open connection to a serial port
client.connectRTUBuffered("COM3", { baudRate: 9600 });
client.setID(1);

// read the values of 1 registers starting at address 1003
// on device number 1. and log the values to the console.
setInterval(function() {
    client.readInputRegisters(0x03EB, 1, function(err, nowqty) {
      console.log(nowqty.data)
        //flow.set('serial_data', data.data) ; //'serial_data'를 전역변수로 설정하여 값을 저장
    });
}, 1000);


/*
client.readInputRegisters(0x03EE, 1, function(err, planqty) {
  console.log(planqty.data)
    //flow.set('serial_data', data.data) ; //'serial_data'를 전역변수로 설정하여 값을 저장
});
*/
