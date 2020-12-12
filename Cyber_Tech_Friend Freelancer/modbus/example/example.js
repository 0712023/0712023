const ModbusRTU = require("modbus-serial")
var async = require("async");

var client = new ModbusRTU();
var timeoutConnectRef = null

function connect(){
    console.log("Connecting..!!");
    clearTimeout(timeoutConnectRef);

    if(client.isOpen){
        console.log('Already connected!!');
        run();
    }

    client.connectRTUBuffered("/dev/ttyUSB0", {dataBits: 8, stopBits: 1, baudRate: 115200})
    .then(setClient)
    .then(function() {console.log("Connected");})
}

function setClient(){
    console.log("Set client ID..!!");
    client.setID(1);
    client.setTimeout(3000);

    run();
}

var task = [
    function(callback) {
        client.readDiscreteInputs(1,4, function(err, res_read){
            console.log("L1: " ,res_read.data[0], res_read.data[1], res_read.data[2], res_read.data[3])
            callback()
        })
    },
    function(callback){
        client.readHoldingRegisters(1,4, function(err, res_read){
            console.log("L1Q: " ,res_read.data[0], res_read.data[1], res_read.data[2], res_read.data[3])
            callback()
        })
    }
]

function run(){
    var setLoop = setInterval(function(){
        async.series(task, function(err, results){
            console.log("done")
        })
    }, 1000)
}

connect()

/*
https://developer-mistive.tistory.com/44
https://blog.naver.com/changbab/221995878344
https://blog.naver.com/ojh1140/221923676202
