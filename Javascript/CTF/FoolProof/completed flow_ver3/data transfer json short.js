var json_data = {} ;
for (i = 1; i<12; i++) {
  json_data["zone" + String(i)] = {} ;
}

json_data.zone1.nowtemp = (msg.payload.result1[5]*256+msg.payload.result1[6])/10 ;
json_data.zone1.settemp = (msg.payload.result1[7]*256+msg.payload.result1[8])/10 ;
json_data.zone1.upper = (msg.payload.result1[9]*256+msg.payload.result1[10])/10 ;
json_data.zone1.lower = (msg.payload.result1[11]*256+msg.payload.result1[12])/10 ;
json_data.zone2.nowtemp = (msg.payload.result1[16]*256+msg.payload.result1[17])/10 ;
json_data.zone2.settemp = (msg.payload.result1[18]*256+msg.payload.result1[19])/10 ;
json_data.zone2.upper = (msg.payload.result1[20]*256+msg.payload.result1[21])/10 ;
json_data.zone2.lower = (msg.payload.result1[22]*256+msg.payload.result1[23])/10 ;

json_data.zone3.nowtemp = (msg.payload.result2[5]*256+msg.payload.result2[6])/10 ;
json_data.zone3.settemp = (msg.payload.result2[7]*256+msg.payload.result2[8])/10 ;
json_data.zone3.upper = (msg.payload.result2[9]*256+msg.payload.result2[10])/10 ;
json_data.zone3.lower = (msg.payload.result2[11]*256+msg.payload.result2[12])/10 ;
json_data.zone4.nowtemp = (msg.payload.result2[16]*256+msg.payload.result2[17])/10 ;
json_data.zone4.settemp = (msg.payload.result2[18]*256+msg.payload.result2[19])/10 ;
json_data.zone4.upper = (msg.payload.result2[20]*256+msg.payload.result2[21])/10 ;
json_data.zone4.lower = (msg.payload.result2[22]*256+msg.payload.result2[23])/10 ;

json_data.zone5.nowtemp = (msg.payload.result3[5]*256+msg.payload.result3[6])/10 ;
json_data.zone5.settemp = (msg.payload.result3[7]*256+msg.payload.result3[8])/10 ;
json_data.zone5.upper = (msg.payload.result3[9]*256+msg.payload.result3[10])/10 ;
json_data.zone5.lower = (msg.payload.result3[11]*256+msg.payload.result3[12])/10 ;
json_data.zone6.nowtemp = (msg.payload.result3[16]*256+msg.payload.result3[17])/10 ;
json_data.zone6.settemp = (msg.payload.result3[18]*256+msg.payload.result3[19])/10 ;
json_data.zone6.upper = (msg.payload.result3[20]*256+msg.payload.result3[21])/10 ;
json_data.zone6.lower = (msg.payload.result3[22]*256+msg.payload.result3[23])/10 ;

json_data.zone7.nowtemp = (msg.payload.result4[5]*256+msg.payload.result4[6])/10 ;
json_data.zone7.settemp = (msg.payload.result4[7]*256+msg.payload.result4[8])/10 ;
json_data.zone7.upper = (msg.payload.result4[9]*256+msg.payload.result4[10])/10 ;
json_data.zone7.lower = (msg.payload.result4[11]*256+msg.payload.result4[12])/10 ;
json_data.zone8.nowtemp = (msg.payload.result4[16]*256+msg.payload.result4[17])/10 ;
json_data.zone8.settemp = (msg.payload.result4[18]*256+msg.payload.result4[19])/10 ;
json_data.zone8.upper = (msg.payload.result4[20]*256+msg.payload.result4[21])/10 ;
json_data.zone8.lower = (msg.payload.result4[22]*256+msg.payload.result4[23])/10 ;

json_data.zone9.nowtemp = (msg.payload.result5[5]*256+msg.payload.result5[6])/10 ;
json_data.zone9.settemp = (msg.payload.result5[7]*256+msg.payload.result5[8])/10 ;
json_data.zone9.upper = (msg.payload.result5[9]*256+msg.payload.result5[10])/10 ;
json_data.zone9.lower = (msg.payload.result5[11]*256+msg.payload.result5[12])/10 ;
json_data.zone10.nowtemp = (msg.payload.result5[16]*256+msg.payload.result5[17])/10 ;
json_data.zone10.settemp = (msg.payload.result5[18]*256+msg.payload.result5[19])/10 ;
json_data.zone10.upper = (msg.payload.result5[20]*256+msg.payload.result5[21])/10 ;
json_data.zone10.lower = (msg.payload.result5[22]*256+msg.payload.result5[23])/10 ;

json_data.zone11.planqty = msg.payload.result6[3]*256+msg.payload.result6[4] ;
json_data.zone11.prodqty = msg.payload.result6[6]*256+msg.payload.result6[7] ;
json_data.zone11.goodqty = msg.payload.result6[10]*256+msg.payload.result6[11] ;
json_data.zone11.cavity = msg.payload.result6[5] ;

msg.payload = json_data ;
return msg ;
