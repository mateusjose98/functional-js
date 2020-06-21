

function calcular (n1) {
    return function (n2) {
        return function (func) {
            return func(n1, n2)
        }
    }
}

const soma = (x1, x2) => x1 + x2 




const resultado = calcular(3)(4)(soma)

console.log(resultado)

