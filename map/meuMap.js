
Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++){

        const r = fn(this[i], i, this)

        mapped.push(r)
    }
    return mapped
}

const dobro = v => v * 2


let valores = [1,23,4,5,3,1,2,3,4,6,8,5]
valores = valores.meuMap(dobro)

console.log(valores)