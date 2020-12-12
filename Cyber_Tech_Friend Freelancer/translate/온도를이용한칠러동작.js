if(Mtemp_value['text']!='0'){
  f1_on();
  f2_on();
  //Chil1_state_value['bg']='green3'
  //Chil2_state_value['bg']='green3'
} else {
  if(Chil1_d1_f >= parseFloat(Chil1_d_temp['text'])){
    //Chil1_state_value['bg']='red'
    f1_bypass();
  } else if(Chil1_d1_f+Chil1_d2_f) <= parseFloat(Chil1_d_temp['text']){
    //Chil1_state_value['bg']='red'
    f1_bypass();
  } else {
    //Chil1_state_value['bg']='green3'
    f1_on();
  }
  if(Chil2_d1_f >= float(Chil2_d_temp['text'])){
    //Chil2_state_value['bg']='red'
    f2_bypass();
  } else if((Chil2_d1_f+Chil2_d2_f) <= parseFloat(Chil2_d_temp['text'])){
    //Chil2_state_value['bg']='red'
    f2_bypass();
  } else {
    //Chil2_state_value['bg']='green3'
    f2_on();
  }
}
if(LN_d1_f >= parseFloat(LN2_d_temp['text'])){ //LN2 작동설정
  LN_state_value['bg']='red';
  g.output(5,true);
} else if((LN_d1_f+LN_d2_f) <= parseFloat(LN2_d_temp['text'])){
  LN_state_value['bg']='red';
  g.output(5,true);
} else {
  LN_state_value['bg']='green3';
  g.output(5,false);
}
if((Chil1_d1_f+Chil1_d2_f) <= parseFloat(Chil1_d_temp['text']) &&
   (Chil2_d1_f+Chil2_d2_f) <= parseFloat(Chil2_d_temp['text']) &&
   (LN_d1_f+LN_d2_f) <= parseFloat(LN2_d_temp['text'])){
     running1 = false; //칠러1,2,LN2 사이클종료
     Chil1_d_temp['text']='0';
     Chil2_d_temp['text']='0';
     LN2_d_temp['text']='0';
   }
