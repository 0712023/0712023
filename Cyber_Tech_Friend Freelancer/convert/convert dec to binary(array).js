var arr = [] ;
var bin = msg.payload  ;
var length = msg.payload.toString(2).length ;
for (i = 0; i < length; i++) {
  arr.push(Math.floor(bin/Math.pow(2, length-1-i))) ;
  bin = bin - arr[i]*Math.pow(2, length-1-i) ;
}
msg.payload = arr ;
return msg ;
