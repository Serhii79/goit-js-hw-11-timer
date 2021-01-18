class CountdownTimer {
    constructor({ selector, targetDate }) {

      this.container = document.querySelector(selector);

      this.refs = {
        days: this.container.querySelector('span[data-value="days"]'),
        hours: this.container.querySelector('span[data-value="hours"]'),
        mins: this.container.querySelector('span[data-value="mins"]'),
        secs: this.container.querySelector('span[data-value="secs"]')
      };

      this.startTime = targetDate;
      this.start();
    }

    start() {
      setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = this.startTime - currentTime;
          this.updateClockface(deltaTime);
        }, 1000);
    };

    updateClockface(time) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    };
};

function pad(value) {
    if (value > 99) {
        return String(value).padStart(3, '0');
    };
  return String(value).padStart(2, '0');
};

export default CountdownTimer;