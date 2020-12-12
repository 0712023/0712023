function u2h(uni){
  var resultlist = [] ;
  for (i = 0; i<uni.length; i++) { //uni 길이만큼 반복
    hex = uni.charCodeAt(i).toString(16) ; //uni에서 i번째 문자를 16진법으로 변환하여 hex에 지정
    resultlist.push(("0"+hex).slice(-2)) ;//hex값을 resultlist에 저장
  }
  return resultlist ;
}
