var hour = msg.payload.hour;
var minute = msg.payload.minute;
var second = msg.payload.second;
var time = hour*3600+minute*60+second;


var timeID = setInterval(function (){
  var nowhour = parseInt(time/3600);
  var nowmin = parseInt((time - 3600*nowhour)/60);
  var nowsec = time%60;
  msg.payload =
  ("0"+nowhour.toString()).substr(-2)
  +":"+
  ("0"+nowmin.toString()).substr(-2)
  +":"+
  ("0"+nowsec.toString()).substr(-2)
  node.send(msg);
  if(time <= 0){
    clearInterval(timeID);
    msg.payload = "timer snooze";
    node.send(msg);
  }
  time--;
}, 1000);
