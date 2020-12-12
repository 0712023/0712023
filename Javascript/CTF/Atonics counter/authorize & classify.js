if (msg.payload.name !== 'CTFadmin') {
    msg.topic = 'error' ;
    msg.payload = 'authorize error' ;
    return msg ;
} else if (msg.payload.type == "now") {
  msg.topic = "now"
} else if (msg.payload.type == "plan") {
  msg.topic = "plan"
} else if (msg.payload.type == "cavity") {
  msg.topic = "cavity"
}
msg.payload = msg.payload.value
return msg;
