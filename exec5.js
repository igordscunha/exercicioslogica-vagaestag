// ------ EXERCÍCIO 5

function inverterString(str) {
  let stringInvertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
  }
  return stringInvertida;
}

// Exemplo de uso com uma string pré-definida
let stringExemplo = "Me chama pra trabalhar ai!";
console.log("String original:", stringExemplo);
console.log("String invertida:", inverterString(stringExemplo));


// let i = str.length - 1: Inicializa a variável i com o índice do último caractere da string.
// Por ser uma iteração de trás pra frente, i >= 0 define a condição de continuação do loop: enquanto o índice i for maior ou igual a 0, o loop continua.
// i--: Decrementa o valor de i em cada iteração
// Cada letra da ordem da iteração (strg[i]) vai ser adicionado a variável stringInvertida, formando a palavra ao contrário.