var col = msg.payload[0][0];
var val = msg.payload[1];
var result = col+'\n'
for(var i =0; i<val.length;i++){
    result+=val[i][0]+'\n';
}
msg.payload = result;


if(msg.payload[0].length>=2){
	return msg;
}
