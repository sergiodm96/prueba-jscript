let valores=[0,0];

while(true){

  if(valores[1]>=100){
    break;
  }

  document.write(`${valores[0]} ${valores[1]} <br>`);


  if(valores[1]<2){
    valores[0]=valores[1];
    valores[1]++;
  }else{
    valores[1]+=valores[0];
    valores[0]=valores[1]-valores[0];
  }
}
