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

 /*conceito de desestruturação de objeto*/

const {nome, idade: idadeUser, naoExiste = 'Não existe a chave mas posso criar e setar um valor default'} = user;

console.log(nome, idadeUser, naoExiste);

function retornarEndereco({endereco}){
    return JSON.stringify(endereco);
}
console.log(`minha idade é ${retornarEndereco(user)}`);


/*conceito de Rest Operator*/

const {name, ...rest} = user;
console.log(name, rest);

const array = [1,2,3,4,5,6,7,8,9,10];
const [first, second,...resto] = array;
console.log(first, second, resto);

/* para ignorar um indice na desestruturacao, deixe o indice vazio, conforme abaixo*/
const [primeiro, ,terceiro, ...restante] = array;
console.log(primeiro, terceiro, restante);

/*short sintax */

let cidade = 'Cuiabá';
let cep = '00000-000';
let estado = 'MT';

/* o javascript assume que o nome da propriedade do objeto é o mesmo nome da variavel*/
const userEndereco = {
    cidade,
    cep,
    estado
};
console.log(userEndereco);


//Option Chaining

const sistema = {
    nomeSistema: 'Pg Online',
    plano: 'anual',
    modulos: {
        contasAReceber: true,
        constaAPagar: true,
        Estoque: true,
        tiposLicencas: {
            anual: '12 meses',
            mensal: '1 mes'
        },
        // retornarOrcamento () {
        //     return 'orcamento finalizado.'
        // }
    }
}

console.log(sistema.modulos);

/* 
    pelo meu entendimento o Option Chaining é uma forma de validacao estilo if ternario mais atual,
    no exemplo abaixo, vou tentar pegar uma propriedade do objeto acima, que nao existe, de 2 formas usando o if ternario e o Option Chaining
*/

/* para melhor assimilacao o if ternario é o mesmo estilo do IIF */
console.log(sistema.modulos ? sistema.modulos.tiposLicencas ? sistema.modulos.tiposLicencas.anual : 'Sem Tipos de Licencas cadastradas' : 'Nao informado.');

/* agora a mesma validacao acima só que com option Chaining, 
   uma forma mais moderna de fazer a validacao acima, 
   ai conforme portas logicas se a primeira condicao for falsa ele nao valida as outras condicoes.
*/
console.log(sistema.modulos?.tiposLicencas?.anual ?? 'Nao existe a informacao');
console.log(sistema.modulos?.tiposLicencas?.retornarOrcamento?.() ?? 'Nao encontrado a funcao para retornar Orcamentos.');

// Fim Objetos


//metodos de array

