let buttonComeçar = document.querySelector('#efeitosonoro');
let buttonComoJogar = document.querySelector('#efeitosonoro2');
let buttonCreditos = document.querySelector('#efeitosonoro3');
let audioArray = document.querySelectorAll('audio');
let divPergunta = document.querySelector('.pergunta');
let credits = document.querySelector('.credits');
let instructions = document.querySelector('.instructions');
let pergunta1 = document.querySelector('#pergunta1')
let pergunta2 = document.querySelector('#pergunta2')
let pergunta3 = document.querySelector('#pergunta3')
const nome = null

// Esse audio vão tocar quando o usuario passar o mause nos buttons
buttonComeçar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonComoJogar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonCreditos.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

function clicouEmComecar() {
    audioArray[2].play(); // Quando o usuario clicar em comecar tocará esse audio >> E ele será direionado para o painel da primeira pergunta
    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    divPergunta.style.display = 'flex';
    nome = prompt("Bem vindo ao QuizScript, digite seu nome");
}

function clicouEmComoJogar() {
    audioArray[2].play();
    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    instructions.style.display = 'flex';
}

function clicouEmCreditos() {
    audioArray[2].play();
    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    credits.style.display = 'flex';
}

function acertouAPergunta1() {
    audioArray[2].play();
    alert(`${nome ?? 'Fulano'} parabéns,você acertou! vamos para a proxima questão?`)
    pergunta1.style.display ='none';
    pergunta2.style.display ='flex';
}

function errouAPergunta() {
    audioArray[4].play();
    alert(`${nome ?? 'Fulano'}, você errou! Tente novamente`)
    pergunta1.style.display ='none';
    pergunta2.style.display ='none';
    pergunta3.style.display ='none';
    telaInicial.style.display = 'flex';
}

function acertouAPergunta2() {
    audioArray[2].play();
    alert(`${nome ?? 'Fulano'} parabéns, você acertou! vamos para a proxima questão?`)
    pergunta2.style.display ='none';
    pergunta3.style.display ='flex';
}

function acertouAPergunta3() {
    audioArray[3].play();
    alert(`${nome ?? 'Fulano'} parabéns por ter chegado até aqui! Você venceu! `)
    pergunta3.style.display ='none'
    telaInicial.style.display = 'flex';
}

function clicouEmVoltarTelaIniciaL() {
    credits.style.display = 'none';
    instructions.style.display = 'none';
    telaInicial.style.display = 'flex';
}