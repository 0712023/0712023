var str = '' ;
for (var i = 0; (i < msg.payload.length); i += 2) {
  str += String.fromCharCode('0x' + msg.payload.substr(i, 2)) ;
}
msg.payload = Buffer.from(str,"ascii") ;
return msg ;
