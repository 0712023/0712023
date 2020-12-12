var signal = global.get('signal1') || 'ok' ; //글로벌 변수 signal을 받아옴 (singal->메인 루프로 부터 데이터를 받을 지 말 지 결정)
if (signal == 'ok') { //signal이 ok인 경우
  if (msg.topic == 'setting') { //msg의 topic이 setting일 경우 (세팅값 입력인 경우)
    signal = 'no' ; //signal을 no로 바꾼다. (메인 루프로부터 새로운 데이터를 받지 않음)
    global.set('signal',signal) ; //전역변수 signal을 no로 지정한다
    return msg ;
  } else { //msg의 topic이 setting이 아닌 경우(protocol 등)
    return msg ; //msg(프로토콜)를 PF에 넣는다
  }
} else { //signal이 no인 경우
  msg.payload = '' ; //payload를 ''로 처리하여 PF에 아무것도 넣지 않는다
  return msg ;
}
