var command = flow.get('command') || [] ; //전역 변수 'command'를 받아옴 , 'command'란 http 통신을 통해 들어온 명령어의 array
var comcount = flow.get('comcount') || 0 ; //전역 변수 'comcount'를 받아옴, 'comcount'란 http 통신을 통해 들어온 명령어의 갯수

if (comcount === 0) { //첫 명령어
  command = Object.values(msg.payload) ; // 명령어들을 command라는 array로 만듬 (name 값인 'CTFadmin' 포함)
  command.splice(0,1) ; // 'CTFadmin' 삭제
  comcount += 1 ;
  if (comcount == command.length) {
    msg.complete = true ;
  }
  flow.set('comcount',comcount) ;
  flow.set('command',command) ;
  msg.payload = command[0] ;
  return msg ;
} else if (comcount < command.length) { //triggered by complete node
  msg.payload = command[comcount] ;
  comcount += 1 ;
  flow.set('comcount',comcount) ;
  if (comcount == command.length) {
    msg.complete = true ;
  }
  return msg ;
}
