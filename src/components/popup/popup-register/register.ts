import { BaseComponent } from '../../../utils/base-component';
import { RegisterContainer } from './register-container/register-container';
import './register.scss';

export class PopupRegister extends BaseComponent {
  hidePopupCancel: () => void = () => {};
  updateHeader: () => void = () => {};

  constructor() {
    super('div', ['popup-register']);
    this.render();
  }

  hidePopup(): void {
    this.element.remove();
  }

  render(): void {
    const wrapper = new BaseComponent('div', ['popup-register__wrapper']);

    const title = new BaseComponent(
      'h2',
      ['popup__title', 'text-20'],
      'Register new Player',
    );

    const registerContainer = new RegisterContainer();
    registerContainer.hidePopupCancel = () => this.hidePopupCancel();
    registerContainer.updateHeader = () => this.updateHeader();

    wrapper.element.append(title.element, registerContainer.element);
    this.element.append(wrapper.element);
  }
}
