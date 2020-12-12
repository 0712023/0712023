//시작시간
var stampm = ''
if (msg.payload.starttime == 0) {
  stampm = 'AM' ;
} else if (msg.payload.startime == 1) {
  stampm = 'PM' ;
}
var sthour = msg.paload.starthour ;
var stminute = msg.payload.startminute ;

//종료시간
var endampm = ''
if (msg.payload.endtime == 0) {
  endampm = 'AM' ;
} else if (msg.payload.endime == 1) {
  endampm = 'PM' ;
}
var endhour = msg.paload.endhour ;
var endminute = msg.payload.endminute ;

msg.payload = {} ; //stampm, sthour, stminute = 시작 AM or PM, 시간, 분 | endampm, endhour, endminute = 종료 AM or PM, 시간, 분
return msg ;
