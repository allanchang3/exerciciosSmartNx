
//E.10 Imprima todos os elementos em que a idade é menor que 30.

function printUnder25(array){

    array.forEach((obj) => {
        if(obj.idade < 30){
            console.log(obj);
        }
    });

}

const array = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
    {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
    {id:3, nome: 'matheus', sobrenome:'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}];

printUnder25(array);