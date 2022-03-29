var impares = 0
var contador = 0 

while(impares < 10){
    
    (contador % 2 === 1)?console.log("contador = " + contador + " impares = "+ impares):console.log("contador = " + contador);
    contador++;

if(contador % 2 === 1){
    impares++;
};
} ;