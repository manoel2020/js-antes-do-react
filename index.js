//nullish Coalesce Operator

/*
    Operador OR - para o operador OR os valores abaixo são valores não validos, 
    por conta disso ele entende na instrução abaixo que não foi definido valor para a variavel Idade.
*/

// 0, '', [], false, udefined, null => falsy
let idade = 0;
console.log(`Sua Idade é: ${idade || 'não informado'}`);

let idade3 = null;
console.log(`Sua Idade é: ${idade3 || 'não informado'}`);

/*
    diferente do OR o nullish, verifica valores que realmente não são validos, como null, Undefinid...
    e como o 0 é um valor real, na instrução abaixo ele entende como um valor valido
*/
idade = 0;
console.log(`Sua Idade é: ${idade ?? 'não informado'}`);

idade3 = null;
console.log(`Sua Idade é: ${idade3 ?? 'não informado'}`);

// Fim nullish Coalesce Operator

//objetos

const user =  {
    name: 'Manoel',
    idade: 28,
    endereco: {
        rua: 42,
        numero: 55
    }
}

//conceito de desestruturação de objeto

const {nome, idade: idadeUser, naoExiste = 'Não existe a chave mas posso criar e setar um valor default'} = user;

console.log(nome, idadeUser, naoExiste);

function retornarEndereco({endereco}){
    return JSON.stringify(endereco);
}
console.log(`minha idade é ${retornarEndereco(user)}`);


//conceito de Rest Operator

const {name, age, ...rest} = user;

console.log(name, age, rest);

// Fim Objetos