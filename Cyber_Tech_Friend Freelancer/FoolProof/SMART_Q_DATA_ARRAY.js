var count = global.get('count') || 0;
if((count%6)!=5) {
  var str = msg.payload ;
  var resultlist = [str.length] ;

  for (i = 0; i<str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    resultlist.push(("0"+hex).slice(-2)) ;
  }

  msg.payload = resultlist ;
  return msg ;
} else {
  msg.payload = NaN ;
  return msg ;
}
