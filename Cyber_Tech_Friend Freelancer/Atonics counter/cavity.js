if (msg.topic == "cavity") {
  flow.set('cavity', msg.payload)
  msg.payload =
  {
    "cavity" : msg.payload
  }
  return msg ;
}
