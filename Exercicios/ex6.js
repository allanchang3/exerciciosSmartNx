
/*E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada
imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.*/

async function fetchAddress(cep){

    try{

        const url = 'https://viacep.com.br/ws/'+cep+'/json/';

        const response = await fetch(url);
        const data = await response.json();

        if(data.erro){
            
            console.error('CEP não encontrado.')
            return;
        }

        const address = data.logradouro + '/' + data.bairro + ', ' + data.complemento + ', ' + data.localidade+ '/' + data.uf;

        console.log(address);
        console.log(data);
    }
    catch
    {
        console.error('Ocorreu um erro ao obter o endereço: ', error);
    }

}

const cep = '3605420';

fetchAddress(cep)

