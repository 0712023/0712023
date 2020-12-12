function scanning(){
  var running1
  var running2
  var rate1_cnt
  var rate2_cnt
  var rate3_cnt
  var rate4_cnt
  var pre_time
  try{ //유량계산 구문
    new_time = Date.now();
    if(new_time >= pre_time + 1000){ //Date.now()의 단위는 ms(0.001 sec)
      Chil1_fl_value['text'] = Math.round(rate2_cnt,2);
      Chil2_fl_value['text'] = Math.round(rate4_cnt,2);
      rate2_cnt=0;
      rate4_cnt=0;
      pre_time = new_time; //1초마다 유량값갱신
    }
  }
  catch(e){
    Chil1_fl_value['text'] = '0.0';
    Chil2_fl_value['text'] = '0.0';
  }
  try{   //temperature data input
    T1_input['text'] = instrument.read_register(2,1);
  }
  catch(e){ //catch(e){ } 생략 가능
  }
  try{
    T2_input['text'] = instrument.read_register(3,1);
  }
  catch(e){
  }
  try{
    T3_input['text'] = instrument.read_register(4,1);
  }
  catch(e){
  }
  try{
    T4_input['text'] = instrument.read_register(5,1);
  }
  catch(e){
  }
  try{
    T5_input['text'] = instrument.read_register(6,1);
  }
  catch(e){
  }
  try{
    T6_input['text'] = instrument.read_register(7,1);
  }
  catch(e){
  }
}

if(pvar.get() == 1){
  var Dset_F1;
  var Dset_F2;
  var Dset_F3;
  var Dset_F4;
  var Dset_T1;
  var Dset_T2;
  var Dset_T3;
  var Dset_T4;
  Dset_F1.concat(F1_input['text']);
  Dset_F2.concat(F2_input['text']);
  Dset_F3.concat(F3_input['text']);
  Dset_F4.concat(F4_input['text']);
  Dset_T1.concat(T1_input['text']);
  Dset_T2.concat(T2_input['text']);
  Dset_T3.concat(T3_input['text']);
  Dset_T4.concat(T4_input['text']);
} else {
  if(Dset_F1 != []){
    d = 0;
    /*
    var path = require('path');
    while(path.existsSync('/home/pi/Desktop/Mold_DB/'+filename.get()+'_data_%s.txt' %d)){
      d+=1;
      //IstY_temp = IstY
      //print (IstY_temp)
      path_t = '/home/pi/Desktop/Mold_DB/'+filename.get()+'_data_'+str(d)+'.txt';
    }
  }
  */
}
