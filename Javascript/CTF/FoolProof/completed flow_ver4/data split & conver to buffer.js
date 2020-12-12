var com_obj = flow.get('command') || [] ;
var com_str = com_obj[0] ;
var hex = '' ;

if (msg.payload==='') {
  flow.set('error', 'authorize error') ;
}

if (com_obj.length == 1) {
  msg.complete = true ;
  flow.set('command', []) ;
} else {
  com_obj.splice(0,1) ;
  flow.set('command', com_obj) ;
}
if (com_str !== undefined) {
  for (var i = 0; (i < com_str.length); i += 2) {
    hex += String.fromCharCode('0x' + com_str.substr(i, 2)) ;
  }
  msg.payload = Buffer.from(hex,"ascii") ;
  return msg ;
}
