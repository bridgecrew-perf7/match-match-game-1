import { ITimer } from '../../../models/timer-model';
import { BaseComponent } from '../../../utils/base-component';
import './game-timer.scss';
import { config } from '../../../_config/index';

export class GameTimer extends BaseComponent {
  private timer: ITimer;
  private span: BaseComponent;
  private interval: ReturnType<typeof setInterval> | undefined;

  constructor() {
    super('div', ['game-timer']);
    this.timer = {
      min: 0,
      sec: config.START_AFTER,
    };

    this.span = new BaseComponent('span', ['text-36', 'back-timer']);
    this.interval = setInterval(() => this.waitTimer(), 1000);
    this.render();
  }

  private updateViewTimer() {
    this.span.element.innerText = `${this.timeFormat(
      this.timer.min,
    )}:${this.timeFormat(this.timer.sec)}`;
  }

  private gameTimer(): void {
    this.timer.sec++;

    if (this.timer.sec === 60) {
      this.timer.min++;
      this.timer.sec = 0;
    }

    this.updateViewTimer();
  }

  private waitTimer(): void {
    this.timer.sec--;

    if (this.timer.sec === 0) {
      this.span.element.classList.remove('back-timer');
      if (this.interval) clearInterval(this.interval);
    }

    this.updateViewTimer();
  }

  startTrack(): void {
    this.interval = setInterval(() => this.gameTimer(), 1000);
  }

  stopTimer(): ITimer {
    if (this.interval) clearInterval(this.interval);

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
    this.span.element.innerText = `00:${this.timeFormat(config.START_AFTER)}`;
    this.element.appendChild(this.span.element);
  }
}
