var data = global.get('data') || 0; //'data'라는 글로벌 변수 선언
data = '' ; //'data'값 초기화
var str = msg.payload ; //PF에서 나온 결과값을 str로 지정
var strlist = [] ; //빈 array인 strlist 생성
for (i = 0; i<str.length; i++) { //str 길이만큼 반복
  hex = str.charCodeAt(i).toString(16); //str에서 i번째 문자를 16진법으로 변환하여 hex에 지정
  strlist.push(hex) ; //hex값을 strlist에 저장
}
data = strlist ; //16진법으로 변환된 결과값을 data에 저장
if(str.length == 8) { //str길이가 8일 때. 즉, http를 통해 명령을 받았을 때
  global.set('data', data) ; //data를 글로벌 변수로 지정
} else {
  global.set('data', 'unexpected result') //str길이가 8이 아닐 때. 즉, 프로토콜 loop의 PF 결과값인 경우 'unexpected result'를 data에 지정
}
return msg ;
