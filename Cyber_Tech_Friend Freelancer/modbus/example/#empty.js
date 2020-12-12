var require = global.get('require');

// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();
// open connection to a serial port
// client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600, parity: 'even' });
client.connectRTUBuffered("COM5", { baudRate: 9600, dataBits: 8, stopBits: 1, parity: 'none' });
client.setID(1);

// read the values of 1 registers starting at address 1003
// on device number 1. and log the values to the console.

setInterval(function() {
    client.writeRegister( 0x0000, 1, function(err, data) {  //FC3
        msg.payload = data
        node.send(msg);
    });
}, 1000);


/*
https://github.com/yaacov/node-modbus-serial/wiki/Methods
FC1  "Read Coil Status"	          readCoils(coil, len)
FC2  "Read Input Status"	        readDiscreteInputs(addr, arg)
FC3  "Read Holding Registers"	    readHoldingRegisters(addr, len)
FC4  "Read Input Registers"	      readInputRegisters(addr, len)
FC5  "Force Single Coil"	        writeCoil(coil, binary) //NOT setCoil
FC6  "Preset Single Register"
FC15 "Force Multiple Coil"	      writeRegister(addr, value)
FC16 "Preset Multiple Registers"  writeRegisters(addr, valueAry)


*/
