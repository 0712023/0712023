var str = msg.payload ; //유니코드 문자인 payload를 str로 지정
var strlist = [] ; //빈 array를 strlist로 지정
for (i = 0; i<str.length; i++) { //str의 길이만큼 반복
  hex = str.charCodeAt(i).toString(16); //str의 i번째 문자를 16진법으로 변환후 hex에 지정
  strlist.push(hex) ; //hex를 strlist에 추가
}
msg.payload = strlist ;
return msg ;
