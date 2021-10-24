// Напиши скрипт, который после нажатия кнопки Start,
// раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const min = 0;
const max = colors.length - 1;
let intervalId = null;
let newColor = null;

const body = document.body;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

btnStart.style.width = "200px";
btnStart.style.height = "100px";
btnStop.style.width = "200px";
btnStop.style.height = "100px";

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
    if (btnStart.disabled) {
        return
    }
    intervalId = setInterval(() => {
        const currentColor = newColor;
        changeBackgroundColor(currentColor);
        btnStart.disabled = true;
    }, 1000);
}

function stopChangeColor() {
    clearInterval(intervalId);
    btnStart.disabled = false;
}

function changeBackgroundColor(currentColor) {
    const color = colors[randomIntegerFromInterval(min, max)]
    
    if (currentColor !== color) {
        body.style.backgroundColor = color;
        newColor = color;
    } else {
        changeBackgroundColor(currentColor)
    }

}




