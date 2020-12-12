var dow = [] ;
var bin = msg.payload  ;
var length = msg.payload.toString(2).length ;
var dayofweek = "" ;
var result = "" ;
for (i = 0; i < length; i++) {
  dow.push(Math.floor(bin/Math.pow(2, length-1-i))) ;
  bin = bin - dow[i]*Math.pow(2, length-1-i) ;
  result += "월화수목금토일".substr(i,dow[i]) ;
}

msg.payload = {} ; //result = 작동요일
return msg ;
