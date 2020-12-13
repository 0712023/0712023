function solution(n) {
  var answer = 0;
  var a = n;
  var b = 1;
  while (a>=1){
    if(a%2==0){
      a/=2;
      b*=2;
    } else{
      break;
    }
    if(a == 1){
      return 1;
    }
  }
  if(b==1){

  }
  console.log(a, b);
  answer+=check(a,b);
  return answer;
}

function hol(a, b){
  if((a-1)/2-b>=0){
    return 1;
  } else{
    return 0;
  }
}
function zak(a, b){
  if(b-(a-1)/2>0){
    return 1;
  } else {
    return 0;
  }
}
function check(a,b){
  return hol(a,b)+zak(a,b);
}
