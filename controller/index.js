let buttonComeçar = window.document.querySelector('.efeitosonoro');
let audioButtonInicial = document.getElementsByTagName('audio');

buttonInicial.addEventListener('mouseenter', () => {
    audioButtonInicial[0].play();
});
