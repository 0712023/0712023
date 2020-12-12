//http를 통해 받은 문자열을 parse하는 함수
//hex는 "020131000003"와 같은 형식이기 때문에 매 2글자마다 첫 2글자만을 parse하여 유니코드로 변환
function hex2a(hex) { //hex라는 문자열을 파싱하는 함수 hex2a
    var str = ''; //빈 str 생성
    for (var i = 0; (i < hex.length); i += 2) //2씩 늘어나는 i값에 대하여 hex의 길이보다 작을 때 까지 반복
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));// str에 i 부터 2개 연속된 값을 16진법에서 유니코드로 변환하여 추가
    return str;
}
