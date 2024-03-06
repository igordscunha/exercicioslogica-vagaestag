// ------ EXERCÍCIO 1

let indice = 13;
let soma = 0;
let k = 0;

while(k < indice){
  k = k + 1;
  soma = soma + k;
}

console.log(soma) //Resultado: 91

// Iteração 1: K = 1, soma = 0 + 1 = 1
// Iteração 2: k = 2, soma = 1 + 2 = 3
// Iteração 3: k = 3, soma = 3 + 3 = 6
// Iteração 4: k = 4, soma = 6 + 4 = 10
// Iteração 5: k = 5, soma = 10 + 5 = 15
// Iteração 6: k = 6, soma = 15 + 6 = 21
// Iteração 7: k = 7, soma = 21 + 7 = 28
// Iteração 8: k = 8, soma = 28 + 8 = 36
// Iteração 9: k = 9, soma = 36 + 9 = 45
// Iteração 10: k = 10, soma = 45 + 10 = 55
// Iteração 11: k = 11, soma = 55 + 11 = 66
// Iteração 12: k = 12, soma = 66 + 12 = 78
// Iteração 13: k = 13, soma = 78 + 13 = 91