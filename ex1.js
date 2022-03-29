// JOVENS 0 ATE 15 ANOS
//ADULTOS 16 ATE 64 ANOS
//IDOSOS  MAIORES 65 
  // VERIFICADOR DE CLASSIFICAÇÃO DE CLASSE ETÁRIA

  function classi (idade){
    if(idade<=15){
        console.log("você é jovem pois tem "+ idade + " anos")
    }else if (idade >=16 && idade <=64){
        console.log("você é adulto pois tem "+ idade +" anos")
    }
    else{
        console.log("você é idoso pois tem  "+ idade +" anos")
    }
}
    classi(80);