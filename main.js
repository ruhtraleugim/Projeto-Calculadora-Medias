const form = document.getElementById('form-atividade');
const imagemFeliz = `<img src= "./images/aprovado.png"/>`;
const imagemTriste = `<img src= "./images/reprovado.png"/>`;
const arrayAtividade = [];
const arrayNotas = [];
const spamAprovado = '<spam class= "resultado aprovado">aprovado</spam>';
const spamReprovado = '<spam class= "resultado reprovado">reprovado</spam>';
const notaMinima = parseFloat(prompt("digite a nota minima:"));


let linhas = ``;


form.addEventListener('submit' , function (e) {
    e.preventDefault();

    addLinha();
})
function addLinha(){
    const imputNomeAtividade = document.getElementById('nome-atividade')
    const imputNotaAtividade = document.getElementById('nota-atividade')

    if(arrayAtividade.includes(imputNomeAtividade.value)){
        alert("atividade já existente");
        
    }else{

    arrayAtividade.push(imputNomeAtividade.value);
    arrayNotas.push(parseFloat(imputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${imputNomeAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value >= notaMinima ?  imagemFeliz : imagemTriste}<td/>`;
    linha += `</tr>`;

    linhas += linha;

    attTabela();
    calcularMedia();
    attMedia();
}
}
function attTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function calcularMedia(){
    let somaNotas = 0 ;
    for(let i = 0 ; i < arrayNotas.length ; i++){
        somaNotas += arrayNotas[i];
        
    }
    return somaNotas/ arrayNotas.length;
}

function attMedia(){
    const media = calcularMedia();

    document.getElementById('mediaValor').innerHTML = media;
    document.getElementById('resultadoFinal').innerHTML = media >= notaMinima ? spamAprovado : spamReprovado;
}
