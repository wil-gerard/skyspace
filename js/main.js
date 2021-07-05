/*----------------------------
Foreground Color Shift
----------------------------*/
const foreground = document.querySelector('#foreground');
const interval = 1 * 30 * 1000; //30 seconds in milliseconds

function cycleForegroundClass() {
    foreground.classList.toggle('foreground-start');
    foreground.classList.toggle('foreground-end');
    window.setTimeout(cycleForegroundClass, interval);
}

cycleForegroundClass();

/*----------------------------
Toolbar
----------------------------*/

const toolbar = document.querySelector('#toolbar');
const hideButton = document.querySelector('#hide-btn');
const upChar = '&and;';
const downChar = '&or;';

function hideToolbar() {
    toolbar.classList.add('hidden');
}

function showToolbar() {
    toolbar.classList.remove('hidden');
}

function toggleToolbar() {
    toolbar.classList.toggle('hidden');
}

hideButton.addEventListener('click', toggleToolbar);

/*----------------------------
Aperture Buttons
----------------------------*/
const aperture = document.querySelector('#aperture')

document.querySelector('#ellipse-aperture-btn').addEventListener('click', changeApertureToEllipse)
document.querySelector('#diamond-aperture-btn').addEventListener('click', changeApertureToDiamond)

function changeApertureToDiamond() {
    if (aperture.classList != 'default-aperture ellipse-aperture'){
        aperture.classList.toggle('diamond-aperture');
    } 
}

function changeApertureToEllipse() {
    if (aperture.classList != 'default-aperture diamond-aperture'){
        aperture.classList.toggle('ellipse-aperture');
    } 
}

/*----------------------------
Slider
----------------------------*/

const rgb1 = [151,176,255];
const rgb2 = [197,151,255];

const slider = document.querySelector('#time-input');

function changeApertureColor(factor) {
    let r = (rgb2[0] - rgb1[0]) * factor + rgb1[0];
    let g = (rgb2[1] - rgb1[1]) * factor + rgb1[1];
    let b = (rgb2[2] - rgb1[2]) * factor + rgb1[2];

    aperture.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// function changeApertureColor(num) {
//     console.log(num);
//     aperture.className = aperture.className.replace(/aperture-color-[\d]/, `aperture-color-${num}`);
// }

slider.addEventListener('input', (e) => { changeApertureColor(e.target.value); });