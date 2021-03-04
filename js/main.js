const foreground = document.querySelector('#foreground');
const interval = 5 * 60 * 1000; //5 minutes in milliseconds

function cycleForegroundClass() {
    foreground.classList.toggle('foreground-start');
    foreground.classList.toggle('foreground-end');
    window.setTimeout(cycleForegroundClass, interval);
}

cycleForegroundClass();