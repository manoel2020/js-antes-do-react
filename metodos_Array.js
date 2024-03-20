/*
    Existem N metodos para se trabalhar com array, mas os mais importantes são os 
    map, filter, every, some, fund, findIndex, reduce
*/

const numeros = [0,1,2,3,4,5,6,7,8,9];

for(const i in numeros){
    console.log(i);
};

console.log("");

numeros.forEach( item => {
    console.log(item);
})

console.log("");

/* O Map retorna uma array & ele "sempre" retorna um array do mesmo tamanho do original*/
const map1 = numeros.map((value) => {
    return value * -1
});
console.log(map1);

/* 
* conforme abaixo mesmo colocando uma condicão para os numeros pares multiplicarem por 10,
* sou obrigado a retornar os outros valores, se não os outros itens ficam null/undefined
*/
const pares = numeros.map((value) => {
    if (value % 2 === 0) {
        return value * 10;
    }
    return value;
});
console.log(pares);


/*
* Assim como o map o filter tem retorno, e ele filtra/corta o array e transforma em um novo array
*/
const somentPares = numeros.filter(value => {
    return value % 2 === 0;
})
console.log(`somente numeros pares ${somentPares}`); 

const impares = numeros.filter((value) => {
    return value % 2 !== 0;
}).map(value => value * 10);
console.log(`somente numeros impares ${impares} e usando map multiplicando por 10 cada.`); 

/* o every retorna true/false, ele retorna true somente se todos os itens do array satisfaca uma condicao */
const todosItensSaoNumero = numeros.every(value => typeof value === 'number');
console.log(`todos os indices do array são numeros e satisfei a condicao? ${todosItensSaoNumero}`);

/* diferente do every o some retorna true se pelo menos um item do array satisfaca uma condicao */
const letrasNumeros = [1,2,5,6,9,'A'];
const temLetras = letrasNumeros.some(value => typeof value === 'string');
console.log(`algum indice do array é do tipo string? ${temLetras}`);

/* o find ele tem retorno, e traz o primeiro indice que atenta a sua condicao, 
   independente se existirem mais indices que atenda a condicao 
*/
const primeiroNumeroPar = numeros.find(value => value % 2 === 0);
console.log(primeiroNumeroPar);

/* o findIndex é a mesma coisa do find, porem ao inves de retornar o valor, ele retorna em qual indice do array ele esta */
const posicaoDoPrimeiroNumeroImpar = numeros.findIndex(item => item % 2 !== 0);
console.log(posicaoDoPrimeiroNumeroImpar);

/* o reduce é uma forma de criar uma nova estrutura de dados a partir do array original, 
   vc pode criar um array, um objeto, uma funcao etc, diferente dos outros metodos o reduce nao retorna somente um array 
*/
const soma = numeros.reduce((accumulator, itemArray)=>{
    return accumulator + itemArray;
},0);
console.log(`A soma de todos os incides é de ${soma}`);

/* pelo meu entendimento o reduce é uma forma mais "moderna" de fazer algo semelhante a interacao abaixo */
let somaitens = 0;
for (let index = 0; index < numeros.length; index++) {    
    somaitens += numeros[index];
};
console.log(somaitens);