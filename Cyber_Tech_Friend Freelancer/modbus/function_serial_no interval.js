var require = global.get('require');

// create an empty modbus client
var ModbusRTU = require("modbus-serial");
var client = new ModbusRTU();


client.connectRTUBuffered("COM3", { baudRate: 9600 }, run);
function run() {
    client.setID(1);
    client.readInputRegisters(0x03EB, 1, function(err, data) {
        console.log(data.data)
    });
}
