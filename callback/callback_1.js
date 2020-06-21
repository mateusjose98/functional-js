//Callbacks --> são funções passadas para outras funções para que sejam executadas


const log = console.log;
const exec = (operacao, valor_1, valor_2) => {
    return operacao(valor_1, valor_2)
}

const somarNoTerminal = (v1, v2) => log(v1 + v2);
const subtrairNoTerminal = (v1, v2) =>  log(v1 - v2);


exec( somarNoTerminal, 56, 38);
exec( subtrairNoTerminal, 56, 38);