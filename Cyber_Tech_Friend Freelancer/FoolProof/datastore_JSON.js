var count = global.get('count') || 0;
var json_obj = global.get('json_obj')



if((count%6)===0) { //count를 6으로 나눈 나머지가 0일 경우
  json_obj = {result1 : '', result2 : '', result3 : '', result4 : '', result5 : '', result6 : ''} ;
  json_obj.result1 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
} else if((count%6)===1) { //count를 6으로 나눈 나머지가 1일 경우
  json_obj.result2 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
} else if((count%6)===2) { //count를 6으로 나눈 나머지가 2일 경우
  json_obj.result3 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
} else if((count%6)===3) { //count를 6으로 나눈 나머지가 3일 경우
  json_obj.result4 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
} else if((count%6)===4) { //count를 6으로 나눈 나머지가 4일 경우
  json_obj.result5 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
} else if((count%6)===5) { //count를 6으로 나눈 나머지가 5일 경우
  json_obj.result6 = msg.payload ;
  global.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
}
count++ ;
global.set('count', count) ;
return msg;
