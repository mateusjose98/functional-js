Array.prototype.meuFilter = function (f) {
    const resultado = []

    for (let i = 0; i < this.length; i++){
        if (f(this[i], i, this)){
            resultado.push(this[i])
        }
    }

    return resultado;
}

const carrinho = [
    {nome: "Caneta", qtde: 10, preco: 5.00},
    {nome: "Lápis", qtde: 4, preco: 1.00},
    {nome: "Grampeador", qtde: 1, preco: 35.00},
    {nome: "Cola Branca", qtde: 3, preco: 7.00},
]

const qteMaiorQueTres = item => item.qtde > 3

const result = carrinho.meuFilter(qteMaiorQueTres)

console.log(result)