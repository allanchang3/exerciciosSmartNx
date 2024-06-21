
//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos.

function printAllArgs(...strings){

    const result = strings.join('');
    
    console.log(result);

}

printAllArgs("Prova", " ", "da", " ", "Smart", "Nx", ".");