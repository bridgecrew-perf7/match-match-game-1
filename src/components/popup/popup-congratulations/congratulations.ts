import { BaseComponent } from '../../../utils/base-component';
import './congratulations.scss';
import { Button } from '../../UI/button/button';

export class PopupCongratulations extends BaseComponent {
  private url = '#/best-scores';

  constructor(time: { min: number; sec: number }) {
    super('div', ['popup-congratulations']);

    const wrapper = new BaseComponent('div', [
      'popup-congratulations__wrapper',
    ]);

    const p = new BaseComponent(
      'p',
      ['text-14'],
      `Congratulations! You successfully found all matches on ${time.min}.${
        time.sec < 10 ? `0${time.sec}` : time.sec
      } minutes`,
    );

    const button = new Button('button', ['btn-primary'], 'OK');
    button.handleButton = () => {
      this.element.remove();
      this.handleButton();
    };

    wrapper.element.append(p.element, button.element);
    this.element.append(wrapper.element);
  }

  handleButton(): void {
    window.location.hash = '#/';
    window.location.hash = this.url;
  }
}
