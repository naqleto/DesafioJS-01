/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.*/

const Antonio={
    nome: "Antonio Clara Bragança",
    endereço: "Av. Aguinaldo Ribas",
    numero: 5020,
    bairro: "Sertaneja",
    cidade: "Palotina",
    estado: "Paraná"
}

const Ana={
    nome: "Ana Clara Bragança",
    endereço: "Av. Aguinaldo Ribas",
    numero: 5020,
    bairro: "Sertaneja",
    cidade: "Palotina",
    estado: "Paraná"
}
console.log(Antonio.nome==Ana.nome)