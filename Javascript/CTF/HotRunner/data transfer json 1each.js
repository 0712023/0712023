var json_res = {} ;

json_res.nowtemp = (msg.payload[3]*256+msg.payload[4])/10 ; //현재온도
json_res.settemp = msg.payload[5]*256+msg.payload[6] ; //설정온도
json_res.max = msg.payload[7] ; //상한값
json_res.min = msg.payload[8] ; //하한값
json_res.outpercent = (msg.payload[9]*256+msg.payload[10])/10 ; //히터출력퍼센트
json_res.current = (msg.payload[11]*256+msg.payload[12])/10 ; //히터소비전류
json_res.capacity = msg.payload[13]*256+msg.payload[14] ; //히터용량값
json_res.degree = msg.payload[15] ; //섭씨or화씨
json_res.error = msg.payload[16] ;//에러상태

msg.payload = json_res ;
return msg ;
