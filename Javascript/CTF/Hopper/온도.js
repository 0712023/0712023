var middle = msg.payload.settemp ;
var minus = msg.payload.lower ;
var plus = msg.payload.upper ;
var nowtemp = msg.payload.nowtemp ;


msg ={payload:nowtemp,ui_control:{min:middle-(minus*2),max:(middle+(plus*2)),seg1:(middle-minus),seg2:(middle+plus)}};
return msg
