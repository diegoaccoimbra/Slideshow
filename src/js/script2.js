//Definindo o radio1 como true pra iniciar na primeira imagem.
document.querySelector("#radio1").checked = true

//Função setInterval que chama a função nextImage e define o tempo padrão que ela é executada (7 segundos).
setInterval(function() {
    nextImage()
}, duration = 7000)

//Função nextImage que vai fazer a transição das imagens.
function nextImage(){
    //Definindo um laço while que vai checar qual radio button está selecionado (qual imagem está aparecendo no momento).
    let i = 1
    while (document.querySelector(`#radio${i}`).checked !== true) {
        i++
    }

    //Definindo a variável "count" que recebe o valor do radio button selecionado.
    let count = i

    //Atualização da variável "count" pra poder passar para a próxima imagem.
    count++
    //Se for maior que 4 ela volta a ser 1 (já que só temos 4 imagens).
    if (count > 4) {
        count = 1
    }

    //Fazendo com que o radio button da próxima imagem seja atualizado a partir do valor da variável "count".
    document.querySelector(`#radio${count}`).checked = true

}
//TENHO QUE CONSERTAR O TEMPO PRA FICAR 7 SEGUNDOS QUANDO O USUÁRIO PASSAR A IMAGEM.