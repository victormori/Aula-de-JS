// console.log é um comando ou uma função do JS
console.log("Hello, World!", "boa boa");
console.log("Meu primeiro código em JavaScript");

// Criação de variáveis
let nome = "Victor";
let idade = 17;
let aluno = "aluno de DS";
const salario = "0";

nome = "Ana Beatriz";
console.log("O Victor Ama a" , nome);
console.log(!4 > 2 && 4 < 3);

// código para curtida
let estado = true;

if (estado == true) {
    // o que vou fazer
    estado = false;
    console.log("Postagem descurtida");
}

else{
     // o que vou fazer se a condição for falsa 
     estado = true;
     console.log("Postagem curtida");
}

// enquanto e para
contador = 1;

while(contador <= 5) { 
    console.log(contador);
    contador = contador + 1;
}

for(let c = 1; c<= 5; c++) {
    console.log(c);
}

// array: armazenar mais de um valor
// indice (posição) e valor sempre começa pelo 0
let listaNomes =["Victor", "Luis", "Ana"];
listaNomes.shift("Alex");
console.log(listaNomes);

//Set timeout

console.log("1. Início")


setTimeout(() => {
    console.log("Demora...")
}, 2000   )



