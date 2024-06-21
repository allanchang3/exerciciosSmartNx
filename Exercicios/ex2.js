
//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

function applyFunction(func, str1, str2){

    const result = func(str1, str2);

    return result;

}

function concat(str1, str2){

    return str1 + str2;

}

const string1 = "Smart";
const string2 = "Nx";

console.log(applyFunction(concat, string1, string2));