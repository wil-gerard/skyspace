const foreground = document.querySelector('#foreground');
const interval = 1 * 30 * 1000; //30 seconds in milliseconds

function cycleForegroundClass() {
    foreground.classList.toggle('foreground-start');
    foreground.classList.toggle('foreground-end');
    window.setTimeout(cycleForegroundClass, interval);
}

cycleForegroundClass();

// class IntervalTimer {
//     constructor(interval) {
//         this.interval = interval;
//     }
//     get getInterval() {
//         return this.interval
//     }
//     cycleForegroundClass() {
//         let foreground = document.querySelector('foreground');
//         foreground.classList.toggle('foreground-start');
//         foreground.classList.toggle('foreground-end');
//         window.setTimeout(cycleForegroundClass, interval)
//     }
// }

// let foregroundIntervalTimer = new IntervalTimer((30 * 1000))
// foregroundIntervalTimer.cycleForegroundClass()