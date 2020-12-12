//글로벌 변수로 inject될 때마다 증가하는 count를 통해 count를 6으로 나눈 나머지를 통해 서로 다른 PF 데이터 호출 프로토콜을 PF에 넣어줌
var count = global.get('count') || 0; // 글로벌 변수 count를 받아옴
count += 1 ; //inject될 때마다 count 1 증가
global.set('count',count); //1이 증가된 count를 다시 글로벌 변수로 선언

if ( msg.payload.name == 'CTFadmin' ) { //http in을 통해 들어온 json에서 name 항목의 유효성 검사(CTFadmin -> 관리자계정)
  msg.payload = msg.payload.command ; //http in을 통해 들어온 json에서 command 항목을 PF에 넣기 위해 payload로 지정(command -> 세팅 데이터 ex)"0x02, 0x01, 0x32, 0x01, 0x01, 0x01, 0x00, 0x03" )
  count -= 1 ; //PF에 세팅 데이터를 넣었으므로 count의 1 증가는 무효
  global.set('count',count) ; //무효화된 count의 값을 다시 글로벌 변수로 선언
  msg.topic = 'setting' ; //세팅시 msg의 topic을 'setting'으로 설정
  return msg ;
} else if((count%6)===0) { //count를 6으로 나눈 나머지가 0일 경우
  msg.payload = String.fromCharCode(0x02, 0x01, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 1의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
} else if((count%6)===1) { //count를 6으로 나눈 나머지가 1일 경우
  msg.payload = String.fromCharCode(0x02, 0x02, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 2의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
} else if((count%6)===2) { //count를 6으로 나눈 나머지가 2일 경우
  msg.payload = String.fromCharCode(0x02, 0x03, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 3의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
} else if((count%6)===3) { //count를 6으로 나눈 나머지가 3일 경우
  msg.payload = String.fromCharCode(0x02, 0x04, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 4의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
} else if((count%6)===4) { //count를 6으로 나눈 나머지가 4일 경우
  msg.payload = String.fromCharCode(0x02, 0x05, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 5의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
} else if((count%6)===5) { //count를 6으로 나눈 나머지가 5일 경우
  msg.payload = String.fromCharCode(0x02, 0x06, 0x41, 0x00, 0x00, 0x00, 0x00, 0x03); //ID 6의 프로토콜 hex값을 유니코드로 변환 후 payload로 지정
}
msg.topic = 'protocol' ; //프로토콜 입력시 msg의 topic을 'protocol'로 설정
return msg ;
