var alarm = '' ;
if (msg.payload.alarm == 0) {
  alarm = 'on' ;
} else if (msg.payload.alarm == 1) {
  alarm = 'off' ;
}
msg.payload = {} //alarm = 알람 on or off
return msg ;
