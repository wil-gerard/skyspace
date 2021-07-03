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
const ellipseClass = document.querySelector('.default-aperture-ellipse');
const diamondClass = document.querySelector('.default-aperture-diamond');

// document.querySelector('#ellipse-aperture-btn').addEventListener('click', changeApertureToEllipse)
document.querySelector('#diamond-aperture-btn').addEventListener('click', changeApertureToDiamond)

function changeApertureToDiamond() {
    // aperture.classList === 'default-aperture-diamond' ? (aperture.classList.toggle('')) 

    if ((aperture.classList != 'default-aperture-ellipse') && (aperture.classList != 'default-aperture-diamond diamond-aperture')){
        aperture.classList.toggle('diamond-aperture');
    } else if (aperture.classList === 'default-aperture-ellipse'){
        aperture.classList.toggle('ellipse-aperture');
    } else {
        diamondClass.ontransitionend = () => {
            aperture.classList.toggle('default-aperture-diamond')
            aperture.classList.toggle('default-aperture-ellipse')
        };
        aperture.classList.toggle('diamond-aperture');
    }
}

// function changeApertureToEllipse() {
//     if (aperture.classList != 'default-aperture-diamond diamond-aperture'){
//         aperture.classList.toggle('ellipse-aperture');
//     } 
// }

// ellipseClass.ontransitionend = () => {
//     aperture.classList.toggle('default-aperture-diamond')
//     aperture.classList.toggle('default-aperture-ellipse')
// }

// diamondClass.ontransitionend = () => {
//     aperture.classList.toggle('default-aperture-diamond')
//     aperture.classList.toggle('default-aperture-ellipse')
// }

