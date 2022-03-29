function calculadora (primeiroNumero,segundoNumero,operador){
   
    switch(operador){
     case "+":
      
     console.log(primeiroNumero+operador+segundoNumero+ "= "+ (primeiroNumero + segundoNumero))  
 break;
 case "-":
      
    console.log(primeiroNumero+operador+segundoNumero+ "= "+  (primeiroNumero - segundoNumero)) 
 break;
 case "*":
    
    console.log(primeiroNumero+operador+segundoNumero+ "= "+  (primeiroNumero * segundoNumero))  
 break;
 case "/":
 
    console.log(primeiroNumero+operador+segundoNumero+ "= "+  (primeiroNumero / segundoNumero))  
 break;
 default:
 console.log(primeiroNumero+operador+segundoNumero+ "= "+"Está operação não esta disponivel")
}
}
calculadora(10,2,"+");
calculadora(10,2,"-");
calculadora(10,2,"*");
calculadora(10,2,"/");
calculadora(10,2,"!");