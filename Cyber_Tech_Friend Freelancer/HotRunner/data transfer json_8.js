var json_data = {} ;
for (i = 1; i<=8; i++) {
  json_data["zone" + String(i)] = {} ;
}

json_data.zone1.nowtemp = (msg.payload.zone1[3]*256+msg.payload.zone1[4])/10 ; //현재온도
json_data.zone1.settemp = msg.payload.zone1[5]*256+msg.payload.zone1[6] ; //설정온도
json_data.zone1.max = msg.payload.zone1[7] ; //상한값
json_data.zone1.min = msg.payload.zone1[8] ; //하한값
json_data.zone1.outpercent = (msg.payload.zone1[9]*256+msg.payload.zone1[10])/10 ; //히터출력퍼센트
json_data.zone1.current = (msg.payload.zone1[11]*256+msg.payload.zone1[12])/10 ; //히터소비전류
json_data.zone1.capacity = msg.payload.zone1[13]*256+msg.payload.zone1[14] ; //히터용량값
json_data.zone1.degree = msg.payload.zone1[15] ; //섭씨or화씨
json_data.zone1.error = msg.payload.zone1[16] ;//에러상태

json_data.zone2.nowtemp = (msg.payload.zone2[3]*256+msg.payload.zone2[4])/10 ; //현재온도
json_data.zone2.settemp = msg.payload.zone2[5]*256+msg.payload.zone2[6] ; //설정온도
json_data.zone2.max = msg.payload.zone2[7] ; //상한값
json_data.zone2.min = msg.payload.zone2[8] ; //하한값
json_data.zone2.outpercent = (msg.payload.zone2[9]*256+msg.payload.zone2[10])/10 ; //히터출력퍼센트
json_data.zone2.current = (msg.payload.zone2[11]*256+msg.payload.zone2[12])/10 ; //히터소비전류
json_data.zone2.capacity = msg.payload.zone2[13]*256+msg.payload.zone2[14] ; //히터용량값
json_data.zone2.degree = msg.payload.zone2[15] ; //섭씨or화씨
json_data.zone2.error = msg.payload.zone2[16] ;//에러상태

json_data.zone3.nowtemp = (msg.payload.zone3[3]*256+msg.payload.zone3[4])/10 ; //현재온도
json_data.zone3.settemp = msg.payload.zone3[5]*256+msg.payload.zone3[6] ; //설정온도
json_data.zone3.max = msg.payload.zone3[7] ; //상한값
json_data.zone3.min = msg.payload.zone3[8] ; //하한값
json_data.zone3.outpercent = (msg.payload.zone3[9]*256+msg.payload.zone3[10])/10 ; //히터출력퍼센트
json_data.zone3.current = (msg.payload.zone3[11]*256+msg.payload.zone3[12])/10 ; //히터소비전류
json_data.zone3.capacity = msg.payload.zone3[13]*256+msg.payload.zone3[14] ; //히터용량값
json_data.zone3.degree = msg.payload.zone3[15] ; //섭씨or화씨
json_data.zone3.error = msg.payload.zone3[16] ;//에러상태

json_data.zone4.nowtemp = (msg.payload.zone4[3]*256+msg.payload.zone4[4])/10 ; //현재온도
json_data.zone4.settemp = msg.payload.zone4[5]*256+msg.payload.zone4[6] ; //설정온도
json_data.zone4.max = msg.payload.zone4[7] ; //상한값
json_data.zone4.min = msg.payload.zone4[8] ; //하한값
json_data.zone4.outpercent = (msg.payload.zone4[9]*256+msg.payload.zone4[10])/10 ; //히터출력퍼센트
json_data.zone4.current = (msg.payload.zone4[11]*256+msg.payload.zone4[12])/10 ; //히터소비전류
json_data.zone4.capacity = msg.payload.zone4[13]*256+msg.payload.zone4[14] ; //히터용량값
json_data.zone4.degree = msg.payload.zone4[15] ; //섭씨or화씨
json_data.zone4.error = msg.payload.zone4[16] ;//에러상태

json_data.zone5.nowtemp = (msg.payload.zone5[3]*256+msg.payload.zone5[4])/10 ; //현재온도
json_data.zone5.settemp = msg.payload.zone5[5]*256+msg.payload.zone5[6] ; //설정온도
json_data.zone5.max = msg.payload.zone5[7] ; //상한값
json_data.zone5.min = msg.payload.zone5[8] ; //하한값
json_data.zone5.outpercent = (msg.payload.zone5[9]*256+msg.payload.zone5[10])/10 ; //히터출력퍼센트
json_data.zone5.current = (msg.payload.zone5[11]*256+msg.payload.zone5[12])/10 ; //히터소비전류
json_data.zone5.capacity = msg.payload.zone5[13]*256+msg.payload.zone5[14] ; //히터용량값
json_data.zone5.degree = msg.payload.zone5[15] ; //섭씨or화씨
json_data.zone5.error = msg.payload.zone5[16] ;//에러상태

json_data.zone6.nowtemp = (msg.payload.zone6[3]*256+msg.payload.zone6[4])/10 ; //현재온도
json_data.zone6.settemp = msg.payload.zone6[5]*256+msg.payload.zone6[6] ; //설정온도
json_data.zone6.max = msg.payload.zone6[7] ; //상한값
json_data.zone6.min = msg.payload.zone6[8] ; //하한값
json_data.zone6.outpercent = (msg.payload.zone6[9]*256+msg.payload.zone6[10])/10 ; //히터출력퍼센트
json_data.zone6.current = (msg.payload.zone6[11]*256+msg.payload.zone6[12])/10 ; //히터소비전류
json_data.zone6.capacity = msg.payload.zone6[13]*256+msg.payload.zone6[14] ; //히터용량값
json_data.zone6.degree = msg.payload.zone6[15] ; //섭씨or화씨
json_data.zone6.error = msg.payload.zone6[16] ;//에러상태

json_data.zone7.nowtemp = (msg.payload.zone7[3]*256+msg.payload.zone7[4])/10 ; //현재온도
json_data.zone7.settemp = msg.payload.zone7[5]*256+msg.payload.zone7[6] ; //설정온도
json_data.zone7.max = msg.payload.zone7[7] ; //상한값
json_data.zone7.min = msg.payload.zone7[8] ; //하한값
json_data.zone7.outpercent = (msg.payload.zone7[9]*256+msg.payload.zone7[10])/10 ; //히터출력퍼센트
json_data.zone7.current = (msg.payload.zone7[11]*256+msg.payload.zone7[12])/10 ; //히터소비전류
json_data.zone7.capacity = msg.payload.zone7[13]*256+msg.payload.zone7[14] ; //히터용량값
json_data.zone7.degree = msg.payload.zone7[15] ; //섭씨or화씨
json_data.zone7.error = msg.payload.zone7[16] ;//에러상태

json_data.zone8.nowtemp = (msg.payload.zone8[3]*256+msg.payload.zone8[4])/10 ; //현재온도
json_data.zone8.settemp = msg.payload.zone8[5]*256+msg.payload.zone8[6] ; //설정온도
json_data.zone8.max = msg.payload.zone8[7] ; //상한값
json_data.zone8.min = msg.payload.zone8[8] ; //하한값
json_data.zone8.outpercent = (msg.payload.zone8[9]*256+msg.payload.zone8[10])/10 ; //히터출력퍼센트
json_data.zone8.current = (msg.payload.zone8[11]*256+msg.payload.zone8[12])/10 ; //히터소비전류
json_data.zone8.capacity = msg.payload.zone8[13]*256+msg.payload.zone8[14] ; //히터용량값
json_data.zone8.degree = msg.payload.zone8[15] ; //섭씨or화씨
json_data.zone8.error = msg.payload.zone8[16] ;//에러상태

msg.payload = json_data ;
return msg ;
