import { BaseComponent } from '../../../utils/base-component';
import './game-timer.scss';

interface ITimer {
  min: number,
  sec: number
}

export class GameTimer extends BaseComponent {
  private timer: ITimer;

  constructor() {
    super('div', ['game-timer']);
    this.timer = {
      min: 0,
      sec: 0,
    };

    this.element.innerHTML = `
      <span class="text-36">00:00</span>
    `;
  }

  startTrack(): void {
    setInterval(() => {
      this.timer.sec++;

      if (this.timer.sec === 60) {
        this.timer.min++;
        this.timer.sec = 0;
      }

      this.element.innerHTML = `
        <span class="text-36">${this.timeFormat(this.timer.min)}:${this.timeFormat(this.timer.sec)}</span>
      `;
    }, 1000);
  }

  private timeFormat(time: number) {
    if (!time && !this.timer) {
      throw new Error('Timer is not defined');
    } else {
      return `${time < 10 ? `0${time}` : `${time}`}`;
    }
  }
}
