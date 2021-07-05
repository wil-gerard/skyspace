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

const aperture = document.querySelector('#aperture');

document.querySelector('#change-aperture-btn').addEventListener('click', cycleApertureShape)

function cycleApertureShape() {
    if ((!aperture.classList.contains('diamond-aperture')) && (aperture.classList.contains('default-aperture-diamond'))){
        aperture.classList.toggle('diamond-aperture');
    } else if ((aperture.classList.contains('default-aperture-diamond')) && (aperture.classList.contains('diamond-aperture'))){
        aperture.classList.toggle('diamond-aperture');
        aperture.ontransitionend = () => {
            aperture.classList.toggle('default-aperture-diamond');
            aperture.classList.toggle('default-aperture-ellipse');
            aperture.ontransitionend = 'null';
        };
    } else if ((!aperture.classList.contains('ellipse-aperture')) && (aperture.classList.contains('default-aperture-ellipse'))){
        aperture.classList.toggle('ellipse-aperture');
    } else if ((aperture.classList.contains('ellipse-aperture')) && (aperture.classList.contains('default-aperture-ellipse'))){
        aperture.classList.toggle('ellipse-aperture');
        aperture.ontransitionend = () => {
            aperture.classList.toggle('default-aperture-diamond');
            aperture.classList.toggle('default-aperture-ellipse');
            aperture.ontransitionend = 'null';
        };
    }
}