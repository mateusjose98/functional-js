# Javascript Funcional e Reativo - COD3R :boom:

## Introdução

### Paradigmas de Programação

- Paradigma Funcional (1957) é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis.

- A programação funcional nos proporciona códigos mais reutilizáveis.

- JS é  uma linguagem multiparadigma, isto é, é programável em vários paradigmas.

- O código funcional tende a usar mais processamento, mas torna a programação paralela mais viável em comparação à POO.


### Declarativo vs Imperativo

| IMPERATIVO | DECLARATIVO |
|-----------------------|---------------------|
|      Foco no fluxo    |    Foco na lógica  |
| Estados Mutáveis      | Imutabilidade      |
|       Como            |       O que        |
|       Mais código     |     Menos código   |
|  Baixa escalabilidade | Alta escalabilidade|
|      Maix conhecido   |  Menos conhecido   |
|    Mais explícito     |  Menos explícito   |

*Exemplos de códigos declarativos (veja que os detalhes de implementação, busca estão abstraídos):* 

``` SELECT matricula FROM alunos WHERE media > 7; ```

``` <ol> <li> item </li></ol> ```

*Exemplos de códigos declarativos:* 
 
``` const notas = [6, 7, 10]
    const somar = (a, b) => a + b
    const dividir = (a, b) => a / b
    const mediaTurma = dividir(notas.reduce(somar), notas.length)

    console.log("Média: ", mediaTurma)
```




