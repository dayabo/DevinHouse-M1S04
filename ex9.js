var cidades = [
    {nome: "Patos de minas", populacao:153585},
    {nome: "Lages", populacao:157349},
    {nome: "Ibiúna", populacao:79479},
    {nome: "Maringá", populacao:403063},
    {nome: "Curitiba", populacao:1963726},
    {nome: "Florianópolis", populacao:508826},
    {nome: "Pato Branco", populacao:84779},
];
 

const contem = cidades.some((nome) => {
    
    return nome.nome.toLocaleLowerCase() === "florianópolis";
  });
  console.log(contem);
