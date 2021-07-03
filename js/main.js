// Aperture change function
const aperture = document.querySelector('#aperture')

document.querySelector('#aperture-btn').addEventListener('click', changeAperture)

function changeAperture() {
    aperture.classList.toggle('elipse-aperture');
}

// Foreground color shift
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