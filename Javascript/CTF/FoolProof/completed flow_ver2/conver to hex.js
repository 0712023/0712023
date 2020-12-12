var str = msg.payload ; //PF에서 나온 결과값을 str로 지정
var resultlist = [] ; //빈 array인 strlist 생성
for (i = 0; i<str.length; i++) { //str 길이만큼 반복
  hex = str.charCodeAt(i).toString(16); //str에서 i번째 문자를 16진법으로 변환하여 hex에 지정
  resultlist.push(("0"+hex).slice(-2)) ;//hex값을 strlist에 저장
}
msg.payload = resultlist ;
return msg ;
