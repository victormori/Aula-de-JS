//Atividade1
function saudar(nome) {
    console.log("Olá" + nome)
}
saudar(" Victor")

//Atividade2
function calcularDobro(numero) {
    console.log("Dobro:" , numero * 2);
}

calcularDobro(4)

//Atividade3

let variavelg1 ="globallet"
const variavelg2 ="globalconst"

function teste() {
    let variavelI1 ="internalet"
    const variavelI2 ="internaglobal"

    console.log(variavelI1, "+", variavelI2)
    console.log(variavelg1, "+", variavelg2)
    
}

//Atividade4

function verificarAprovaçao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 7) {
        console.log("Aluno Aprovado com a media:", media)
    } else {
        console.log("Aluno Reprovado com media:", media)
    }
 
}      

verificarAprovaçao(6, 6, 9)

// Atividade5

function esperar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Processando...");
        resolve(); // Indica que terminou
      }, 2000);
    });
  }
  
  esperar().then(() => {
    console.log("Concluído!");
  });

// Atividade6

function buscarDados() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Dados recebidos!");
      }, 2000);
    });
  }
  
  // Função async para usar await
  async function executar() {
    const resultado = await buscarDados();
    console.log(resultado);
  }
  
  // Chama a função async
  executar();

// Atividade 7


const readline = require("readline");

// Cria a interface de entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função assíncrona para verificar paridade
async function verificarParidade(numero) {
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }
  rl.close(); // Fecha o readline
}

// Pede para o usuário digitar um número
rl.question("Digite um número: ", (input) => {
  const numero = parseInt(input); // Converte para número
  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido!");
    rl.close();
  } else {
    verificarParidade(numero); // Chama a função assíncrona
  }
});