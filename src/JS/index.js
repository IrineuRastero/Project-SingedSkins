//Que a força do ódio me ajude para terminar isso em tempo

//identificar os botoes do HTMl
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const texto = document.querySelectorAll(".informacoes")
//identificar o clique do usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //desmarcar o botao marcado
        desativarBotaoSelecionado();

        //marcar o botao clicado
        botao.classList.add("selecionado")

        //esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        //mostrar a imagem selecionada
        mostrarImagemDeFundo(indice);

        //esonder as informações anteriormente selecionadas

        esconderInformacoesAtivas();

        //mostrar a informação correta referente ao botão clicado
        mostrarInformacoes(indice);
    });
});

function mostrarInformacoes(indice) {
    texto[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
