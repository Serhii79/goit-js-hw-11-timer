const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]')
};

const timer = {
  intervalId: null,
  start() {
    const startTime = new Date('Nov 01, 2021');

    updateClockface(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      updateClockface(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
    /*
    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    */
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    /*
    * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
    * остатка % и делим его на количество миллисекунд в одном часе
    * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
    */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    /*
    * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
    * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
    */
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    /*
    * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
    * миллисекунд в одной секунде (1000)
    */
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};

function pad(value) {
    if (value > 99) {
        return String(value).padStart(3, '0');
    };
  return String(value).padStart(2, '0');
};