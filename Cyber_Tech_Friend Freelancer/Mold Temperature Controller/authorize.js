if (msg.payload.name !== "CTFadmin") {
  msg.topic = 'error'
  msg.payload = 'authorize error'
}
return msg
