const nome ='Michelle'
const sobrenome ='Lopes'
const idade = 31
const peso = 57
const alturaEmM = 1.54

let imc = peso / (alturaEmM * alturaEmM)
console.log(imc)

anoNascimento = 2023 - idade
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log (`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)