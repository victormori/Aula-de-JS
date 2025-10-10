//Atividade 1 

function calcularDesconto(preço, desconto) {
    valorFinal = (desconto / 100) * preço;
    console.log("O valor com desconto:", valorFinal )

}
calcularDesconto(200, 25);

//Atividade 2

function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Usuário ou senha incorretos!");
    }
  }
  
  login("admin", "1234"); 
  login("victor", "100524");  

// Atividade 3

estoque = 10;

function teste() {
    let venda = 3
    const produto = "Canetas"
    console.log(venda, "", produto)
    console.log(estoque)
}
console.log(estoque);

// Atividade 4

function podeComprari(idade, usuario) {




}