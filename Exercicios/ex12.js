
/*Crie uma função que rece um objeto com o formato acima descrito e deleta o campo
"documento". a função deve devolver o objeto atualizado.*/

function removeDocument(obj){

    delete obj.documento;

    return obj;
} 

const pessoa = {
                "nome": "Dev",
                "sobrenome":"smart",
                "idade":"26",
                "cargo":"analista de sistemas",
                "documento":"123.345.678-90"
               };

const pessoaAtt = removeDocument(pessoa);

console.log(pessoaAtt);