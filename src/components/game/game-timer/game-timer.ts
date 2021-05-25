import { BaseComponent } from '../../../utils/base-component';
import './game-timer.scss';

interface ITimer {
  min: number;
  sec: number;
}

export class GameTimer extends BaseComponent {
  private timer: ITimer;
  private span: BaseComponent;
  private interval: ReturnType<typeof setInterval> | undefined;

  constructor() {
    super('div', ['game-timer']);
    this.timer = {
      min: 0,
      sec: 0,
    };

    this.span = new BaseComponent('span', ['text-36']);
    this.render();
  }

  private gameTimer(): void {
    this.timer.sec++;

    if (this.timer.sec === 60) {
      this.timer.min++;
      this.timer.sec = 0;
    }

    // Update ui timer
    this.span.element.innerText = `${this.timeFormat(
      this.timer.min,
    )}:${this.timeFormat(this.timer.sec)}`;
  }

  startTrack(): void {
    this.interval = setInterval(() => this.gameTimer(), 1000);
  }

  stopTimer(): ITimer {
    if (this.interval) {
      clearInterval(this.interval);
    }

    return this.timer;
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
