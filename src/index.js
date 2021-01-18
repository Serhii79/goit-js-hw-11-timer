import CountdownTimer from './timer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 29, 2021'),
});