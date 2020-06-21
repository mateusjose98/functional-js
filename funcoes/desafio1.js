
function somar(n1) {
    return function (n2){
        return n1 + n2
    }
}

const soma = somar(10)(20)

console.log(soma)


