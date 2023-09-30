class Clock {
    constructor(template, clockID) {
        this.template = template;
        this.clockID = clockID;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        document.getElementById(this.clockID).innerHTML = output;
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class UpdatedClock extends Clock{
    stop(id) {
        clearInterval(id)
    }
    start(step, stopTime){
        this.render();
        this.timer = setInterval(() => this.render(), step);
        this.timer1 = setTimeout(() => this.stop(this.timer), stopTime)
    }
}