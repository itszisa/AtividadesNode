const prompt = require('prompt-sync')
const entrada = prompt();

const nomeCompleto = "Isabelle Cristyne Da Silva Da Cruz";
const anoNascimento = 2005;
let anoAtual = 2024;
const idade = 19;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 20;
const NomeCompleto = "Isabelle Cristyne Da Silva Da Cruz ";
const Faculdade = "TI";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} minha idade é ${idade}`)

const listaDeviagens = new  Array(
  `Ibiza`,
  `Italia`,
  `Seattle`,
  `Àfrica`,
  `Turquia`,
  `Chile`,
);

console.log (listaDeviagens)

console.log(listaDeviagens[4])
listaDeviagens.push("Coronel vivida");
console.log(listaDeviagens);

listaDeviagens.splice(1,2);
console.log(listaDeviagens);

var nomecomprador = entrada ("Qual seu nome?");
var idadeComprador = entrada("qual é a sua idade?");

if(idadeComprador < 18){
  console.log("infelizmente você é menor e idade não podemos vender nossas passagens")
}
if(idadeComprador >= 18){
  console.log("Qual o seu destino?")
}


