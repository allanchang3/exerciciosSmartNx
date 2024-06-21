
//E.9 Imprima o objeto se existir alguém com menos 25 anos. <-- O objeto que possui menos de 25 anos ?

function printUnder25(array){

    array.forEach((obj) => {
        if(obj.idade < 25){
            console.log(obj);
        }
    });

}

const array = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
    {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
    {id:3, nome: 'matheus', sobrenome:'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}];

printUnder25(array);