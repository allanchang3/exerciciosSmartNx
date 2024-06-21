
/*E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências 
de números pelo valor '[removido]'.*/

function removeNumbers(string){

    return string.replace(/\d+/g, '[removido]');

}

const string  = 'teste 1 de 2 string 3';

console.log(removeNumbers(string));