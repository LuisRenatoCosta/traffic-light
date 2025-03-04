const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex = colorIndex + 1;
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red':          () => img.src = './imagens/vermelho.png',
    'yellow':       () => img.src = './imagens/amarelo.png',
    'green':        () => img.src = './imagens/verde.png',
    'automatic':    () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);
