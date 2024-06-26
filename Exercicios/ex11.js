
/*E.11 Ordene o array de forma decrescente por idade, em caso de empate o
desempate é pelo id.*/

function sortDescending(array){

    array.sort((objA, objB) => {
        
        if(objB.idade !== objA.idade){
            return objB.idade - objA.idade;
        }

        return objA.id - objB.id;

    });

    return array;

}

const array = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
    {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
    {id:3, nome: 'matheus', sobrenome:'garcia', idade: 28}, 
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}];

console.log(sortDescending(array));
