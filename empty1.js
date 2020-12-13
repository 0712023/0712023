function solution(n) {
  var answer = 0;
  var a = [];
  var b = n;
  loop1:
  for(var i=2;i<n/2;i++){
    var c = [i, 0];
    loop2:
    while(b>=1){
      if(b%i ==0){
        b/=i;
        c[1]++;
      } else {
        break loop2;
      }
    }
    if(c[1]!=0){
      a.push(c);
    }
  }
  console.log(a);

  if(a[0][0] !=2){
    
  }
  return 0;
}

function check(a,b){
  var c = 0;
  if((a-1)/2-b>=0){
    c++;
  }
  if(b-(a-1)/2>0){
    c++;
  }
  return c;
}
