// map() é aplicada sobre arrays
// trabalha com o conceito de calback functions
//
//            [1, 3, 4, 3, 9, 7].map((e) => {e * 2})
//
//            #Dominio = #Imagem

const nums = [1,2,3,4,5];

const contaAleatoria = (n, indice, vetor) => n * 2 + indice + vetor.length;

console.log(nums.map(contaAleatoria))