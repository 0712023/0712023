if (msg.payload.name == 'CTFadmin') { //'CTFadmin'일 경우
  msg.payload = msg.payload ; //값 통과
} else {
  msg.payload = {} ;
}
return msg;
