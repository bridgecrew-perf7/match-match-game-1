import { BaseComponent } from '../../utils/base-component';
import './popup.scss';
import { Button } from '../UI/button/button';

export class Popup extends BaseComponent {
  handleButton: () => void = () => {};

  constructor(text: string) {
    super('div', ['popup-congratulations']);

    const wrapper = new BaseComponent('div', [
      'popup-congratulations__wrapper',
    ]);

    const p = new BaseComponent('p', ['text-14'], text);

    const button = new Button('button', ['btn-primary'], 'OK');
    button.handleButton = () => {
      this.element.remove();
      this.handleButton();
    };

    wrapper.element.append(p.element, button.element);
    this.element.append(wrapper.element);
  }
}
