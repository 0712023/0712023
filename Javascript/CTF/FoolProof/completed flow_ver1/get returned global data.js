var data = global.get('data') || 0 ; //글로벌 변수로 선언된 'data' 값을 받아옴
msg.payload = data ; //data를 payload로 지정
return msg ;
