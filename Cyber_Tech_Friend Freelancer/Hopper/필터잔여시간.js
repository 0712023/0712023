var lefthours = (msg.payload.setdate-msg.payload.nowdate)*24 + (msg.payload.sethour-msg.payload.nowhour) ;
var leftdays = Math.floor(lefthours/24) ;
lefthours = lefthours-leftdays*24 ;
msg.payload = {} ; // leftdays = 남은 일수, lefthours = 남은 시간
return msg ;
