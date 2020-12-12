var resource = '' ;
if (msg.payload.resource == 0) {
  resource = 'exist' ;
} else if (msg.payload.resource == 1) {
  resource = 'not exist' ;
}
msg.payload = {} //resource = 재료 존재 유무
return msg ;
