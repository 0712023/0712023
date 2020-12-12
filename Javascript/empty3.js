//MQTT
var client = flow.get('client') || 0;
if(client === 0){
  msg.payload = 'connect mqtt client first';
  return msg;
}
var topic1 = '/ksline';
var topic2 = '/ksmachine';
var topic3 = 'wobatch';
var data = msg.payload;
var m11_power = flow.get('m11_power')
var m11_alarm = flow.get('m11_alarm')
var machine_name_bin = data[601];
var robot_status = data[900]
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}
//Time
var date = new Date();
var year = date.getFullYear();
var month = addZero(date.getMonth() + 1);
var day = addZero(date.getDate());
var hour = addZero(date.getHours());
var minute = addZero(date.getMinutes());
var second = addZero(date.getSeconds());

//initializing
if(String(hour) + String(minute) == '0800'){
  flow.set('batch',0);
}
//batch mapping
var batch = flow.get('batch') || 0; //최소 batch no
var tmp = batch;
var batch98 = []; //[3 3 3 3 2 2 2 0 0 1 1 0]
//var data = [4,3,2,1,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
//var data = [9,8,7,6,5,4,3,2,1,0,0,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]
for(i = 98 ; i>= 0 ; i--){
  if(data[i] === 1){
    batch += 1;
  } else if (i === 98 && data[i] !== 0){
    batch =batch;
  } else if (i === 0 ){
    batch =batch;
  }

  if(data[i] !== 0){
    batch98.unshift(batch);
  } else {
    batch98.unshift(0);
  }
}
//wo98
var wo_no = flow.get('wo_no')||undefined;
var wo98 = flow.get('wo98'); //[null, null, null, ..., null, null]
var rack = {};
for(i = 0; i<99;i++){
  rack[i] = data[i];
}
var oldrack = flow.get('rack')||{};
flow.set('rack', rack);
if(JSON.stringify(rack)!=JSON.stringify(oldrack)){ //compare rack with before
  wo98.pop(); //remove last element
  wo98.unshift(wo_no); //add wo_no at first position
}

//rack data(R0001 ~ R0099)

json1 = [];

for(i = 0; i <= 98 ; i++){
  json1.push({'name' : 'p'+i.toString(), 'rack_no' : data[i], 'wo_no' : wo98[i], 'batch' : batch98[i]})
}
client.publish(topic1, JSON.stringify(json1));

//machine status
var machine_id = ['1','2','3','4','5','etc1','6','7','etc2','etc3','10','8','etc4','9','11','12']
var machine_name = ['m1', 'm2', 'm3', 'm4'
                    , 'm5', 'etcm1', 'm6', 'm7'
                    , 'etcm2', 'etcm3', 'm10', 'm8'
                    , 'etcm4', 'm9','m11','m12']


json2 = [];
var reversedata = machine_name_bin.split("").reverse().join("");
var reversedataparsing = reversedata.padEnd(16,'0');
flow.set('dataabc',reversedataparsing);
reversedataparsing = '0000000000000000'
for(i = 0; i<16; i++){
    if(i < 5){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': reversedataparsing[i]})
    }

    else if(6 <= i && i <=7 ){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': reversedataparsing[i]})
    }
    else if(i===10){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': reversedataparsing[i]})
    }
    else if(i===11){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': reversedataparsing[i]})
    }
    else if(i===13){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': reversedataparsing[i]})
    }
    else if(i===14){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': m11_power, 'alram':m11_alarm})
    }
    else if(i===15){
        json2.push({'id': machine_id[i], 'name': machine_name[i], 'status': robot_status})
    }
}
client.publish(topic2, JSON.stringify(json2));

//processing alarm
if(data[1] === 1){
  var init = {};
  init['batch'] = batch98[1];
  init['pw_no'] = wo98[wo98.length - 1];
  init['status'] = 'processing';
  //client.publish(topic3, JSON.stringify(init));
}

//closed alarm
if(data[97]-data[98] < 0){
  var close = {};
  close['batch'] = batch98[98];
  close['pw_no'] = wo98[wo98.length - 1];
  close['status'] = 'closed';
  //client.publish(topic3, JSON.stringify(close));
}

//MONGODB//

var now = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
var mongojson = {}
function cleardb(){
  mongojson['wo_no'] = String('');
  mongojson['wo_cnt'] = '';
  mongojson['rack_no'] = '';
  mongojson['chk_cd'] = '';
  mongojson['chk_nm'] = '';
  mongojson['param'] = '';
  mongojson['value'] = parseFloat('');
  mongojson['chk_tm'] = '';
  mongojson['robotcnt'] = Number('')
}

for(i = 1; i<=5 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B101-TP01';
  mongojson['chk_nm'] = '침지탈지 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8400]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 6; i<=9 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B102-TP01';
  mongojson['chk_nm'] = '초음파탈지 1 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8401]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 12; i<=16 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = ''
  mongojson['chk_nm'] = '산세 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8402]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 20; i<=23 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B109-TP01';
  mongojson['chk_nm'] = '초음파탈지 2 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8403]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 24; i<=26 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B110-TP01';
  mongojson['chk_nm'] = '전해탈지-온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8404]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
i = 30;
mongojson['wo_no'] = String(wo98[i-1]);
mongojson['wo_cnt'] = batch98[i-1];
mongojson['rack_no'] = data[i];
mongojson['chk_cd'] = 'B114-PH01';
mongojson['chk_nm'] = '활성화-pH 1';
mongojson['param'] = 'PH';
mongojson['value'] = parseFloat(data[400]);
mongojson['chk_tm'] = now;
mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();
for(i = 31; i<=83 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B115-TP01';
  mongojson['chk_nm'] = '도금-온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8405]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 86; i<=87 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = ''
  mongojson['chk_nm'] = '온수세 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8406]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
i = 88;
mongojson['wo_no'] = String(wo98[i-1]);
mongojson['wo_cnt'] = batch98[i-1];
mongojson['rack_no'] = data[i];
mongojson['chk_cd'] = 'B119-PH01';
mongojson['chk_nm'] = '활성화-pH 2';
mongojson['param'] = 'PH';
mongojson['value'] = parseFloat(data[402]);
mongojson['chk_tm'] = now;
mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();
for(i = 90; i<=91 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B121-TP01';
  mongojson['chk_nm'] = '크로메이트-온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8407]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}
for(i = 96; i<=97 ; i++){
  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B128-TP01';
  mongojson['chk_nm'] = '코팅 백 - 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8408]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();

  mongojson['wo_no'] = String(wo98[i-1]);
  mongojson['wo_cnt'] = batch98[i-1];
  mongojson['rack_no'] = data[i];
  mongojson['chk_cd'] = 'B129-TP01';
  mongojson['chk_nm'] = '코팅 흑 - 온도';
  mongojson['param'] = 'temperature';
  mongojson['value'] = parseFloat(data[8412]);
  mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}

//예외데이터
mongojson['wo_no'] = String('');
mongojson['wo_cnt'] = '';
mongojson['rack_no'] = ('');
mongojson['chk_cd'] = 'etcproc';
mongojson['chk_nm'] = '온수세 예비조 온도';
mongojson['param'] = 'temperature';
mongojson['value'] = parseFloat(data[8411]);
mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();

mongojson['wo_no'] = String('');
mongojson['wo_cnt'] = '';
mongojson['rack_no'] = ('');
mongojson['chk_cd'] = 'etcproc';
mongojson['chk_nm'] = '천연색 예비조 온도';
mongojson['param'] = 'temperature';
mongojson['value'] = parseFloat(data[8413]);
mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();

mongojson['wo_no'] = String('');
mongojson['wo_cnt'] = '';
mongojson['rack_no'] = ('');
mongojson['chk_cd'] = 'etcproc';
mongojson['chk_nm'] = '정류기 냉각조 온도';
mongojson['param'] = 'temperature';
mongojson['value'] = parseFloat(data[8414]);
mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();

mongojson['wo_no'] = String('');
mongojson['wo_cnt'] = '';
mongojson['rack_no'] = ('');
mongojson['chk_cd'] = 'etcproc';
mongojson['chk_nm'] = '온수 Tank 온도';
mongojson['param'] = 'temperature';
mongojson['value'] = parseFloat(data[8415]);
mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);
cleardb();

for(i = 1; i<=12;i++){
  var address = [9020,9021,9022,9023,9024,9025,9030,9031,9032,9033,9034,9035]
  mongojson['wo_no'] = String('');
  mongojson['wo_cnt'] = '';
  mongojson['rack_no'] = ('');
  mongojson['chk_cd'] = 'etcproc';
  mongojson['chk_nm'] = '정류기 전류 데이터 '+i;
  mongojson['param'] = 'current';
  mongojson['value'] = parseFloat(data[address[i-1]]);
  mongojson['chk_tm'] = now;
    mongojson['robotcnt'] = Number(robot_status)
  msg.payload = mongojson;
  node.send(msg);
  cleardb();
}

mongojson['wo_no'] = String('');
mongojson['wo_cnt'] = '';
mongojson['rack_no'] = ('');
mongojson['chk_cd'] = 'etcproc';
mongojson['chk_nm'] = '세정기 ph';
mongojson['param'] = 'PH';
mongojson['value'] = parseFloat(data[406]);
mongojson['chk_tm'] = now;
  mongojson['robotcnt'] = Number(robot_status)
msg.payload = mongojson;
node.send(msg);

cleardb();
