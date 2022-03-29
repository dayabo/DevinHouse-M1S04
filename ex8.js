var cidades = [
    {nome: "Patos de minas", populacao:153585},
    {nome: "Lages", populacao:157349},
    {nome: "Ibiúna", populacao:79479},
    {nome: "Maringá", populacao:403063},
    {nome: "Curitiba", populacao:1963726},
    {nome: "Florianópolis", populacao:508826},
    {nome: "Pato Branco", populacao:84779},
];
const cidadesPopulosa = cidades.filter((cidade) => cidade.populacao > 200000);
console.log(cidadesPopulosa);

const ordena = cidadesPopulosa.sort((a,b) => {
    return b.populacao - a.populacao
});
console.log(ordena);