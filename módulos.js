// importação da biblioteca readline
const readline = require("readline");

// cria uma interface, isso é um requisito do readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// função que retorna uma Promise
function perguntar(pergunta) {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}
  

async function main() {
    const nome = await perguntar("Digite seu nome: ");
    const idade = await perguntar("Digite sua idade: ");
    console.log(`Olá ${nome}, você tem ${idade} anos!`);
    rl.close();
}
  
main();
  