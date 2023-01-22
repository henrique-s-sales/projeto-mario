/*

OBJETIVO 1 - quando o usuario clicar no botao  de veja trailer, devemos abrir a modal com o video do trailar
   - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
   - passo 2 - dar um jeito de identificar quando o usuario clicar o botao
   - passo 3 - dar um jeito de pegar o elemento do modal no js
   - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no x devemos fechar o modal
   - passo 1 - dar um jeito de pegar o elemento de fechar a modal
   - passo 2 - dar um jeito de identificar quando o usuario clicar no X
   - passo 3 - fechar a modal

*/ 

console.log('mostrar o document', document);

//- passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

//- passo 2 - dar um jeito de identificar quando o usuario clicar o botao

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");
    //- passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    //fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

//- passo 3 - dar um jeito de pegar o elemento do modal no js

// obj 2
//- passo 1 - dar um jeito de pegar o elemento de fechar a modal


//- passo 2 - dar um jeito de identificar quando o usuario clicar no X





