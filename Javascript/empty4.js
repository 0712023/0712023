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
console.log(batch98);

//wo98
var wo_no = flow.get('wo_no')||undefined;
var wo98 = flow.get('wo98'); //[null, null, null, ..., null, null]
var rack = {};
for(i = 0; i<99;i++){
  rack[i] = data[i];
}
var oldrack = flow.get('rack');
flow.set('rack', rack);
if(!Object.is(oldrack, rack)){ //compare rack with before
  wo98.pop(); //remove last element
  wo98.unshift(wo_no); //add wo_no at first position
}
