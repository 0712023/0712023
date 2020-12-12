var dow = [] ;
var bin = msg.payload ;
var length = msg.payload.toString(2).length ;
for (i = 0; i < length; i++) {
  dow.push(Math.floor(bin/Math.pow(2, length-1-i))) ;
  bin = bin - dow[i]*Math.pow(2, length-1-i) ;
}
msg.payload = dow ;
return msg ;
