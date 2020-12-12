var count = global.get('count') || 0; // 글로벌 변수 count를 받아옴
if((count%6)==5 && msg.payload.length != 8) { //count가 5일 때. 즉, ID가 6인 경우. 그리고 payload의 길이가 8이 아닌 경우. 즉, http를 통해 받은 명령에 대한 응답값이 아닌 경우
  var str = msg.payload ; //PF 결과값을 str에 지정
  var resultlist = [str.length] ; //str 길이 값이 포함된 array를 resultlist에 지정

  for (i = 0; i<str.length; i++) { //str 길이만큼 반복
    hex = str.charCodeAt(i).toString(16); //str에서 i번째 문자를 16진법으로 변환하여 hex에 지정
    resultlist.push(("0"+hex).slice(-2)) ; //hex값의 가장 뒷부분 2글자와 그 앞에 0을 추가한 문자를 resultlist에 저장
  }

  msg.payload = resultlist ; //resultlist를 payload에 지정
  return msg ;
} else { //ID가 1~5인 경우, http를 통해 받은 명령에 대한 응답값인 경우
  msg.payload = NaN ; //payload는 NaN
  return msg ;
}
