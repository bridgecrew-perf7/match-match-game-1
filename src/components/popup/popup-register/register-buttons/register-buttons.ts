import { BaseComponent } from '../../../../utils/base-component';
import { Button } from '../../../UI/button/button';

import './register-button.scss';

export class RegisterButtons extends BaseComponent {
  hidePopupCancel: () => void = () => {};

  private addUser: BaseComponent;

  constructor() {
    super('div', ['form__buttons']);

    this.addUser = new Button('submit', ['btn-primary'], 'add user');
    this.addUser.element.setAttribute('disabled', '');

    const close = new Button('button', ['btn-lightblue'], 'cancel');
    close.handleButton = () => {
      this.hidePopupCancel();
    };

    this.element.append(this.addUser.element, close.element);
  }

  toggleDisabled(value: boolean): void {
    this.addUser.element.toggleAttribute('disabled', value);
  }
}
