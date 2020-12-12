var status = flow.get('status') || 'ok'; //ok is loop, no is http
if (!!msg.res) { // API를 통해 정보가 들어왔을 때
  status = 'no' ; // API를 통해 들어온 세팅값의 시리얼 통신을 방해하지 않기 위해 메인 루프를 정지
  flow.set('status', status);
}
if (status == 'ok') { // API를 통해 메인 루프가 정지되지 않은 경우 (평상시)
  var routine = flow.get('routine') || 0 ; //routine은 loop를 순서대로 돌리기 위한 숫자 (id값)
  routine += 1 ; // routine은 1씩 증가
  if (routine > 8){ // routine이 loop_condition의 값보다 커지면 다시 routine을 1로 설정(다시 zone 1의 데이터를 조회)
    routine = 1 ;
  }
  flow.set('routine', routine) ;
  msg.payload = Buffer.from(String.fromCharCode(0x02, '0x'+routine.toString(16), 0x51, 0x00, 0x00, 0x00, 0x00, 0x03),"ascii") ;
  return msg ;
}
