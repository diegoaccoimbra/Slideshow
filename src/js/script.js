//Definindo o radio1 como true pra iniciar na primeira imagem.
document.querySelector("#radio1").checked = true
/* Selecionando todos os elementos "input" do tipo "radio" pra uma variável */
let radioButtons = document.querySelectorAll("input[type='radio']")
/* Variável que armazena o intervalo */
let interval

/* Função que inicia um novo intervalo */
function startInterval() {
    /* Caso tenha um intervalo anterior, a função "clearInterval" limpa ele */
    if (interval) {
        clearInterval(interval)
    }
    /* Inicia um novo intervalo */
    interval = setInterval(function() {
        nextImage()
    }, duration = 7000)
}

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

/* Manipulador de eventos pra cada radio button, assim quando o usuário selecionar qualquer radio button ele cria um novo intervalo */
radioButtons.forEach(radio => {
    radio.addEventListener("change", startInterval)
})