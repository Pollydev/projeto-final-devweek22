/* Ao passar o mouse em cima do personagem:
-colocar a classe selecionado e animação
- retirar a classe selecionado do personagem q já estava
*/

/* Ao passar o mouse em cima do quadro de personagem:
- alterar a imagem do jogador
- alterar o nome do personagem
*/


let personagens = document.querySelectorAll('.personagem');
 
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        let = personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        let idSelecionado = personagem.attributes.id.value;

        let imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/images/${idSelecionado}.png `
    
        let nomeJogador1 = document.getElementById('nome-jogador-1');
        let nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})




