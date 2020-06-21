// passando função como parametro
function bomDia() {
    return "bom dia";
}

const gritar = function (f) {
    console.log(f().toUpperCase() + '!!!!!!')
}

gritar(bomDia)


//retornando funcao

function pot(b){
    return function(e){
        return  Math.pow(b, e)
    }
}


const bits8 = pot(2)
console.log(bits8(8))


























