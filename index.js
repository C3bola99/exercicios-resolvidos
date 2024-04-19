const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

//o processo retornará como (False,false,true,boolean)


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
 
const soma = (Number(primeiroNumero) + Number(segundoNumero))

console.log(soma)

//será impresso os dois valores digitas, porém nao somados!
//o que pode ser mudado para se chegar ao resultado é alterar a linha de soma...
//adicionando o prefixo Number antes das variáveis 
