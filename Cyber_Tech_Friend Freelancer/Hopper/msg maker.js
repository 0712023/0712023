var status = flow.get('status') || 'ok'; //ok is loop, no is http
if (!!msg.res) {
  status = 'no' ;
  flow.set('status', status);
}
if (status == 'ok') {
  msg.payload = Buffer.from(String.fromCharCode(0x02, 0x01, 0xB1, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii");
  return msg ;
}
