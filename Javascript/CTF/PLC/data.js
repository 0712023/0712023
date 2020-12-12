if (msg.payload[5] = 14) {
  //연속읽기
} else if(msg.payload[5] = 5) {
  //개별읽기
} else {
  print("error")
}



//parsing
var length = msg.payload[30] + msg.payload[31]*256 //20
var data = [length]  //[1, 1, 0, 1, ..]

for (i = 0; i < length; i++) {
  data.push(msg.payload[i+32])
}
msg.payload = data //[ 10 0 0 0 0 0 0 0 0 0 0 ..]



var start = msg.payload[0] //5
var length = msg.payload[1][0] //10
var data = msg.payload[1].splice(1,length) //[0 0 0 0 0 0...]
var data_comb = []
for (i=0; i < data.length; i+=2) {
  data_comb.push(data[i]+data[i+1]*256)
}

var start_array = []
for (i=0; i<data_comb.length; i++) {
  start_array.push(start+i)
}

var data_json = {}
for (i = 0; i<length/2; i++) {
  data_json[String(start_array[i])] = data_comb[i];
}
msg.payload = data_json



var start = 5
var length = 10
var data = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0]
