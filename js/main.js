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
