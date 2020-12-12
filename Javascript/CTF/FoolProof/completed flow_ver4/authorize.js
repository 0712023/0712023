if (msg.payload.name == 'CTFadmin') { //'CTFadmin'일 경우
  var obj = Object.values(msg.payload) ;
  obj.splice(0,1) ;
  flow.set('command', obj) ;
  msg.payload = obj ;
} else {
  flow.set('command', ['authorize error']) ;
  msg.payload = '' ;
}
return msg;
