function u2h(uni){
  var resultlist = [] ;
  for (i = 0; i<uni.length; i++) { //uni 길이만큼 반복
    hex = uni.charCodeAt(i).toString(16) ; //uni에서 i번째 문자를 16진법으로 변환하여 hex에 지정
    resultlist.push(("0x"+hex)) ;//hex값을 resultlist에 저장
  }
  return resultlist ;
}
var protocol1 = [0x4C, 0x53, 0x49, 0x53, 0x2D, 0x58, 0x47, 0x54, 0x00, 0x00, 0x00, 0x00, 0xA0, 0x33, 0x02, 0x00]
var protocol2 = [0x00, 0x03, 0x00, 0x54, 0x00, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00]
var protocol3 = [0x00]
var protocol = protocol1.concat("0x"+(msg.payload.length+10).toString(16)).concat(protocol2).concat("0x"+(msg.payload.length).toString(16)).concat(protocol3).concat(u2h(msg.payload))
//, 0x25, 0x44, 0x57, 0x30, 0x30, 0x30, 0x30, 0x31
// msg.payload는 DW0001과 같은 문자

var protocol_ascii = ''
for (i=0; i<protocol.length;i++) {
  protocol_ascii += String.fromCharCode(protocol[i])
}
msg.payload = Buffer.from(protocol_ascii,"ascii")
return msg ;
