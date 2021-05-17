import { BaseComponent } from '../../../utils/base-component';
import './game-timer.scss';

interface ITimer {
  min: number;
  sec: number;
}

export class GameTimer extends BaseComponent {
  private timer: ITimer;

  private span: BaseComponent;

  constructor() {
    super('div', ['game-timer']);
    this.timer = {
      min: 0,
      sec: 0,
    };

    this.span = new BaseComponent('span', ['text-36']);
    this.render();
  }

  startTrack(): void {
    setInterval(() => {
      this.timer.sec++;

      if (this.timer.sec === 60) {
        this.timer.min++;
        this.timer.sec = 0;
      }

      // Update ui timer
      this.span.element.innerText = `${this.timeFormat(
        this.timer.min,
      )}:${this.timeFormat(this.timer.sec)}`;
    }, 1000);
  }

  private timeFormat(time: number) {
    if (!time && !this.timer) {
      throw new Error('Timer is not defined');
    } else {
      return `${time < 10 ? `0${time}` : `${time}`}`;
    }
  }

  render(): void {
    this.span.element.innerText = '00:00';
    this.element.appendChild(this.span.element);
  }
}
