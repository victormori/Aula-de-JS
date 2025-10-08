// Atividade1

let a = 10;
let b = 20;

console.log("soma dos valores=", a + b);
console.log("subtração dos valores=", a - b);
console.log("multiplicação dos valores=", a * b);
console.log("divisão dos valores=", a / b);

// Atividade2

let idadedousuario = 20;

if (idadedousuario < 18) {
    console.log("menor de idade");
} else {
    console.log("maior de idade");
}

// Atividade3

const numero = 7;

console.log("Tabuada de 7:")
console.log("7 x 1 =" , numero * 1);
console.log("7 x 2 =" , numero * 2);
console.log("7 x 3 =" , numero * 3);
console.log("7 x 4 =" , numero * 4);
console.log("7 x 5 =" , numero * 5);
console.log("7 x 6 =" , numero * 6);
console.log("7 x 7 =" , numero * 7);
console.log("7 x 8 =" , numero * 8);
console.log("7 x 9 =" , numero * 9);
console.log("7 x 10 =", numero * 10);

// Atividade4

let numerocontagem = 5;

console.log("Contagem Regressiva:");

for (let i = numerocontagem; i >= 0; i = i - 1) {
    console.log(i);
}
console.log("Contagem encerrada!");

// Atividade5

let listadecompras = ["chocolate", "leite", "ovos", "creme de cabelo", "oléo capilar"];

for (let i = 0; i < listadecompras.length; i++) {
    console.log(listadecompras[i]);
}

// Atividade6

let nota1 = 24;
let nota2 = 26;
let nota3 = 25;
let nota4 = 25;
let media = (nota1 + nota2 + nota3 + nota4);
console.log("Média =" , media / 4);

// Atividade7

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}      
    
// Atividade8

let valordesejado = 30;
let saldodisponivel = 5;

if (valordesejado <= saldodisponivel) {
    console.log("Saque Realizado");
}
else {
    console.log("Saldo Insuficiente")
}