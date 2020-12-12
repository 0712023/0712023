if(running2 == true && g.input(2) == false){  // 형폐/사출신호In
  running1 = 'Mold_close';
}

running2 = g.input(2);
if(running1 == 'Mold_close'){   // 형폐신호시 동작설정
  try {
    Chil1_d1_f = parseFloat(Chil1_sb_value.get());  //칠러1 대기시간
  }
  catch(e){
    Chil1_d1_f = parseFloat("0.0");  //default 설정
  }
  try{
    Chil1_d2_f = parseFloat(Chil1_ij_value.get());   //칠러1 가동시간
  }
  catch(e){
      Chil1_d2_f = parseFloat("0.0");   //default 설정
  try{
    Chil2_d1_f = parseFloat(Chil2_sb_value.get());   //칠러2 대기시간
  }
  catch(e){
    Chil2_d1_f = parseFloat("0.0");   //default 설정
  try{
    Chil2_d2_f = parseFloat(Chil2_ij_value.get());   //칠러2 가동시간
  }
  catch(e){
    Chil2_d2_f = parseFloat("0.0");   //default 설정
  try{
    LN_d1_f = parseFloat(LN_sb_value.get());   //칠러1 대기시간
  }
  catch(e){
    LN_d1_f = parseFloat("0.0");   //default 설정
  try{
    LN_d2_f = parseFloat(LN_ij_value.get());   //칠러1 대기시간
  }
  catch(e){
    LN_d2_f = parseFloat("0.0");   //default 설정
  }
}

Chil1_d_temp['text'] = parseFloat(Chil1_d_temp['text'])+0.1   //1 사이클 타이머
Chil2_d_temp['text'] = parseFloat(Chil2_d_temp['text'])+0.1   //2 사이클 타이머
LN2_d_temp['text'] = parseFloat(LN2_d_temp['text'])+0.1       //LN2 사이클 타이머
