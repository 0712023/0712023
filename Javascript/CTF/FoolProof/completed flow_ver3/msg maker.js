var status = flow.get('status') || 'ok'; //ok is loop, no is http
if (!!msg.res) {
  status = 'no' ;
  flow.set('status', status);
}
if (status == 'ok') {
  var count = flow.get('count') || 0;
  count += 1 ;
  flow.set('count',count);

  if((count%6)===0) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x01, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  } else if((count%6)===1) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x02, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  } else if((count%6)===2) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x03, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  } else if((count%6)===3) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x04, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  } else if((count%6)===4) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x05, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  } else if((count%6)===5) {
    msg.payload = Buffer.from(String.fromCharCode(0x02, 0x06, 0x41, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  }
  return msg ;
}
