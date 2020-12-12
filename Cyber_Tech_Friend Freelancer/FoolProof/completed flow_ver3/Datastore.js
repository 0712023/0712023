var count = flow.get('count') || 0;
var json_obj = flow.get('json_obj')

if((count%6)===0) { //count를 6으로 나눈 나머지가 0일 경우
  json_obj = {} ;
  json_obj.result1 = msg.payload ;
  flow.set('json_obj',json_obj) ;
} else if((count%6)===1) { //count를 6으로 나눈 나머지가 1일 경우
  json_obj.result2 = msg.payload ;
  flow.set('json_obj',json_obj) ;
} else if((count%6)===2) { //count를 6으로 나눈 나머지가 2일 경우
  json_obj.result3 = msg.payload ;
  flow.set('json_obj',json_obj) ;
} else if((count%6)===3) { //count를 6으로 나눈 나머지가 3일 경우
  json_obj.result4 = msg.payload ;
  flow.set('json_obj',json_obj) ;
} else if((count%6)===4) { //count를 6으로 나눈 나머지가 4일 경우
  json_obj.result5 = msg.payload ;
  flow.set('json_obj',json_obj) ;
} else if((count%6)===5) { //count를 6으로 나눈 나머지가 5일 경우
  json_obj.result6 = msg.payload ;
  flow.set('json_obj',json_obj) ;
  msg.payload = json_obj ;
  return msg;
}
