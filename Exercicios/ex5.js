
/*E.5 Dado o dicionário {'a': 4, 'e' :3 ,'i' :1 , 's': 5 } substitua os números na frase 'T35t3
d3 35t4g1o'pelos valores de suas respectivas keys, por exemplo a frase ol4 ficaria ola.*/

function replaceNumbers(string, dict){

    const newString = string.replace(/\d/g, (match) => {
        for(const [key, value] of Object.entries(dict)){
            if(value == match){
                return key;
            }
        }
    });

    return newString;

}

const string = 'T35t3 d3 35t4g1o'

const dictionary = {'a': 4, 'e' :3 ,'i' :1 , 's': 5 }

console.log(replaceNumbers(string, dictionary));