var oldcount = flow.get('count') || 0;
var counter = parseInt('0x'+String.fromCharCode(msg.payload[14],msg.payload[15],msg.payload[16],msg.payload[17]), 16) ;
if (counter !== oldcount) {
  flow.set('count', counter) ;
  msg.payload = Buffer.from(String.fromCharCode(0x05, 0x30, 0x30, 0x52, 0x53, 0x53, 0x30, 0x31, 0x30, 0x36, 0x25, 0x44, 0x44, 0x30, 0x35, 0x30, 0x04),"ascii"); //무게
  return msg ;
}
