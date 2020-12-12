if (msg.payload.result6 != '') {
  var json_data = {
    "zone1": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone2": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone3": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone4": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone5": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone6": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone7": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone8": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone9": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone10": {
      "nowtemp": '',
      "settemp": '',
      "upper": '',
      "lower": ''
    },
    "zone11": {
      "planqty": '',
      "prodqty": '',
      "goodqty": '',
      "cavity": ''
    }
  } ;


  json_data.zone1.nowtemp = parseInt(msg.payload.result1[5].concat(msg.payload.result1[6]), 16) ;
  json_data.zone1.settemp = parseInt(msg.payload.result1[7].concat(msg.payload.result1[8]), 16) ;
  json_data.zone1.upper = parseInt(msg.payload.result1[9].concat(msg.payload.result1[10]), 16) ;
  json_data.zone1.lower = parseInt(msg.payload.result1[11].concat(msg.payload.result1[12]), 16) ;
  json_data.zone2.nowtemp = parseInt(msg.payload.result1[16].concat(msg.payload.result1[17]), 16) ;
  json_data.zone2.settemp = parseInt(msg.payload.result1[18].concat(msg.payload.result1[19]), 16) ;
  json_data.zone2.upper = parseInt(msg.payload.result1[20].concat(msg.payload.result1[21]), 16) ;
  json_data.zone2.lower = parseInt(msg.payload.result1[22].concat(msg.payload.result1[23]), 16) ;

  json_data.zone3.nowtemp = parseInt(msg.payload.result2[5].concat(msg.payload.result2[6]), 16) ;
  json_data.zone3.settemp = parseInt(msg.payload.result2[7].concat(msg.payload.result2[8]), 16) ;
  json_data.zone3.upper = parseInt(msg.payload.result2[9].concat(msg.payload.result2[10]), 16) ;
  json_data.zone3.lower = parseInt(msg.payload.result2[11].concat(msg.payload.result2[12]), 16) ;
  json_data.zone4.nowtemp = parseInt(msg.payload.result2[16].concat(msg.payload.result2[17]), 16) ;
  json_data.zone4.settemp = parseInt(msg.payload.result2[18].concat(msg.payload.result2[19]), 16) ;
  json_data.zone4.upper = parseInt(msg.payload.result2[20].concat(msg.payload.result2[21]), 16) ;
  json_data.zone4.lower = parseInt(msg.payload.result2[22].concat(msg.payload.result2[23]), 16) ;

  json_data.zone5.nowtemp = parseInt(msg.payload.result3[5].concat(msg.payload.result3[6]), 16) ;
  json_data.zone5.settemp = parseInt(msg.payload.result3[7].concat(msg.payload.result3[8]), 16) ;
  json_data.zone5.upper = parseInt(msg.payload.result3[9].concat(msg.payload.result3[10]), 16) ;
  json_data.zone5.lower = parseInt(msg.payload.result3[11].concat(msg.payload.result3[12]), 16) ;
  json_data.zone6.nowtemp = parseInt(msg.payload.result3[16].concat(msg.payload.result3[17]), 16) ;
  json_data.zone6.settemp = parseInt(msg.payload.result3[18].concat(msg.payload.result3[19]), 16) ;
  json_data.zone6.upper = parseInt(msg.payload.result3[20].concat(msg.payload.result3[21]), 16) ;
  json_data.zone6.lower = parseInt(msg.payload.result3[22].concat(msg.payload.result3[23]), 16) ;

  json_data.zone7.nowtemp = parseInt(msg.payload.result4[5].concat(msg.payload.result4[6]), 16) ;
  json_data.zone7.settemp = parseInt(msg.payload.result4[7].concat(msg.payload.result4[8]), 16) ;
  json_data.zone7.upper = parseInt(msg.payload.result4[9].concat(msg.payload.result4[10]), 16) ;
  json_data.zone7.lower = parseInt(msg.payload.result4[11].concat(msg.payload.result4[12]), 16) ;
  json_data.zone8.nowtemp = parseInt(msg.payload.result4[16].concat(msg.payload.result4[17]), 16) ;
  json_data.zone8.settemp = parseInt(msg.payload.result4[18].concat(msg.payload.result4[19]), 16) ;
  json_data.zone8.upper = parseInt(msg.payload.result4[20].concat(msg.payload.result4[21]), 16) ;
  json_data.zone8.lower = parseInt(msg.payload.result4[22].concat(msg.payload.result4[23]), 16) ;

  json_data.zone9.nowtemp = parseInt(msg.payload.result5[5].concat(msg.payload.result5[6]), 16) ;
  json_data.zone9.settemp = parseInt(msg.payload.result5[7].concat(msg.payload.result5[8]), 16) ;
  json_data.zone9.upper = parseInt(msg.payload.result5[9].concat(msg.payload.result5[10]), 16) ;
  json_data.zone9.lower = parseInt(msg.payload.result5[11].concat(msg.payload.result5[12]), 16) ;
  json_data.zone10.nowtemp = parseInt(msg.payload.result5[16].concat(msg.payload.result5[17]), 16) ;
  json_data.zone10.settemp = parseInt(msg.payload.result5[18].concat(msg.payload.result5[19]), 16) ;
  json_data.zone10.upper = parseInt(msg.payload.result5[20].concat(msg.payload.result5[21]), 16) ;
  json_data.zone10.lower = parseInt(msg.payload.result5[22].concat(msg.payload.result5[23]), 16) ;

  json_data.zone11.planqty = parseInt(msg.payload.result6[3].concat(msg.payload.result6[4]), 16) ;
  json_data.zone11.prodqty = parseInt(msg.payload.result6[6].concat(msg.payload.result6[7]), 16) ;
  json_data.zone11.goodqty = parseInt(msg.payload.result6[10].concat(msg.payload.result6[11]), 16) ;
  json_data.zone11.cavity = parseInt(msg.payload.result6[5], 16) ;

  msg.payload = json_data ;
  return msg;

}
