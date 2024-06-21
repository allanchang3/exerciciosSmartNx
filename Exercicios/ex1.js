
//E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.

function biggestLength(str1, str2){
    
    if(str1.length > str2.length){
        return str1;
    } else if (str2.length > str1.lentgh ){
        return str2;
    } else {
        return "Ambas as strings tem o mesmo tamanho.";
    }
    
}

const string1 = "SmartNx";
const string2 = "Smart";

const result = biggestLength(string1, string2);

console.log(result);