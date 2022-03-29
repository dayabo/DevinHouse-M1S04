let contasDeClientes= [
    {
        id: 1, 
        saldo: 500,
    },

    {
        id: 2, 
        saldo: 30000,
    },

    {
        id: 3, 
        saldo: 50,
    },
];
         
const atualizaSaldo = (id, saldo) => {
 contasDeClientes = contasDeClientes.map((conta) => (conta.id === id ? { ...conta, saldo } : conta));
    console.log(`Seu saldo atual é: ${saldo}`);
  };

const saque = (id,valor) =>  {
    
    let clienteId = contasDeClientes.find((cliente) => cliente.id === id);
    let conta = clienteId.saldo;

   if (valor <= 0){
       console.log(`Valor Inválido!`)
   }
  
   else if (valor > clienteId.saldo ){
   console.log("Saldo Insuficiente!");
   console.log("Saldo Atual: " + clienteId.saldo);
   }
 
   else if (valor > 0 && valor < clienteId.saldo){
    console.log(`Saque Realizado Com Sucesso!`)
    const saldo = clienteId.saldo - valor;
    atualizaSaldo(id, saldo);
 
   }
}


const deposito = (id,valor) =>  {
    let clienteId = contasDeClientes.find((cliente) => cliente.id === id);
    let conta = clienteId.saldo;

    if (valor <= 0){
        console.log(`Valor Inválido!`)
    }
    else if (valor > 0){
        console.log(`Deposito Realizado Com Sucesso!`);
        const saldo = clienteId.saldo + valor;
        atualizaSaldo(id, saldo);
        
    }}

    saque (3,-10)
    deposito(3, 50);
    saque(3, 20);
    saque(3, 90); 

    