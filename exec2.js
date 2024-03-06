// ------ EXERCÍCIO 2

let teste = 55 //números pertencentes para teste 1 2 3 5 8 13 21 34 55 89 144

function Fibonacci(num) {
  let a = 0;
  let b = 1;
  
  while (b <= num) {
      if (b === num) {
          return true
      }
      
      let x = a + b;
      a = b;
      b = x;
  }
  
  return false;
}

if (Fibonacci(teste)) {
  console.log(teste + " pertence à sequência de Fibonacci.");
} else {
  console.log(teste + " não pertence à sequência de Fibonacci.");
}