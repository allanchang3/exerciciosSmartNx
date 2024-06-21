
/*E.7 Imprima uma mensagem de saudação com o nome completo para cada um
dos objetos. O nome deve ter a primeira letra maiúscula.*/

function greetingMessage (array){

    array.forEach((object) =>{

        const name = object.nome.charAt(0).toUpperCase() + object.nome.slice(1) + ' ' + object.sobrenome;

        console.log('Olá, '+ name+ '!');

    });

}

const array = [{id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42}, 
               {id: 2, nome: 'daniel',sobrenome: 'gonçalves', idade: 21}, 
               {id:3, nome: 'matheus', sobrenome:'garcia', idade: 28}, 
               {id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21}];

greetingMessage(array);