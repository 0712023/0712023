var json_res = {} ;
for (i = 1; i<msg.payload.length+1; i++) {
  json_res["response" + String(i)] = msg.payload[i-1] ;
}
msg.payload = json_res ;
flow.set('status','ok') ;
return msg ;
