# Javascript Funcional e Reativo - COD3R :boom:
## Instrutor: Leonardo Moura Leitao (Arquiteto de Software)

## Introdução

#### Paradigmas de Programação

- Paradigma Funcional (1957) é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis.

- A programação funcional nos proporciona códigos mais reutilizáveis.

- JS é  uma linguagem multiparadigma, isto é, é programável em vários paradigmas.

- O código funcional tende a usar mais processamento, mas torna a programação paralela mais viável em comparação à POO.


#### Declarativo vs Imperativo

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
SQL
```
 SELECT matricula FROM alunos WHERE media > 7; 
``` 
HTML
``` 
    <ol> 
        <li> item </li>
        <li> item </li>
    </ol> 
 
```
JAVASCRIPT
```
 const notas = [6, 7, 10]
    const somar = (a, b) => a + b
    const dividir = (a, b) => a / b
    const mediaTurma = dividir(notas.reduce(somar), notas.length)

    console.log("Média: ", mediaTurma)
```


#### O Paradigma Funcional

- **First Class Functions**: as funções são tratadas como valores.

*Function Expression:*

``` 
const dobro = function(x) {
        return x * 2
    }

    dobro(20)
```
*Composição de Funções*

``` 
const exagerado = composicao(
    gritar, <-- É uma função
    enfatizar,  <-- É uma função
)

exagerado('PARA')  <-- É uma função
```

Um pouco de **Imutabilidade**...

A programação funcional enfrentou um grande problema na época de sua criação: o alto custo de memória. Fato que inviabilizava a cópia de grandes arrays por exemplo. A ideia, então, foi utilizar a passagem por referência que economiza memória. No cenário atual, temos mais memória com preço menor e múltiplos processadores.

Não se mexe nas informações antigas, se cria novas.

**Por que aprender PF?**

1. A programação funcional é mais simples - torna mais fácil de escrever e manter;
2. Não possui acoplamento temporal, pois trabalhamos com imutabilidade;
3. Poucos problemas de concorrência;
4. Trabalha com imutabilidade.



#### Como funciona o Javascript?

Existe uma área especial de memória chamada - HEAP - onde serão armazenadas as informações (objetos, funções).

Quando iniciamos um programa e chamamos as funções, digamos f, que chama a função h, que chama a função g essas funções de exemplo serão referenciadas no local chamado - STACK - de execução. Essa pilha (STACK) vai descendo e subindo até o programa terminar. Em Javascript temos uma única linha de execução.

Como, então, o Javascript faz as coisas assíncronas?
Para isso existe o EVENT QUEUE (fila com prioridade). Processamentos que dão demandar mais tempo são referenciados nesse local. O seu código continua executando normalmente e quando for o momento da execução, isto é, quando a STACK estiver vazia, o que está no EVENT QUEUE será executado. O fato anterior deve-se ao Javascript ser - single-thread -.


Exemplos:



``` 
function fn3() {

    setTimeout(() => {
        console.log('timeout')
    }, 3000)
    console.log('f3')
}
function fn2() {fn3()}
function fn1(){ fn2()}
function main() {fn1()}

main()
console.log('fim')
```




![](/img/cfjs.svg)







