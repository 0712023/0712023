response1 = msg.payload[0] ;
response2 = msg.payload[1] ;
response3 = msg.payload[2] ;
response4 = msg.payload[3] ;
response5 = msg.payload[4] ;
response6 = msg.payload[5] ;
response7 = msg.payload[6] ;
response8 = msg.payload[7] ;
response9 = msg.payload[8] ;
response10 = msg.payload[9] ;
response11 = msg.payload[10] ;
response12 = msg.payload[11] ;

var json_res = {
  "response1": response1,
  "response2": response2,
  "response3": response3,
  "response4": response4,
  "response5": response5,
  "response6": response6,
  "response7": response7,
  "response8": response8,
  "response9": response9,
  "response10": response10,
  "response11": response11,
  "response12": response12
}

msg.payload = json_res ;
return msg ;
