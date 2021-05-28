import { BaseComponent } from '../../../../utils/base-component';
import { RegisterUpload } from '../register-upload/register-upload';
import { RegisterInputs } from '../register-inputs/register-inputs';
import { IUserData } from '../../../../models/user-data-model';
import { RegisterButtons } from '../register-buttons/register-buttons';

import './register-container.scss';

export class RegisterContainer extends BaseComponent {
  hidePopupCancel: () => void = () => {};
  updateHeader: () => void = () => {};

  state: IUserData;

  private registerButtons;

  constructor() {
    super('div', ['popup__form']);

    this.state = {
      name: '',
      surname: '',
      email: '',
      img: '',
    };

    const registerUpload = new RegisterUpload();
    registerUpload.getImg = (image) => {
      this.state.img = image;
    };

    this.registerButtons = new RegisterButtons();
    this.registerButtons.hidePopupCancel = () => this.hidePopupCancel();

    const inputsBlock = new RegisterInputs(this.state);
    inputsBlock.checkInputs = () => this.checkInputs();

    const formContent = new BaseComponent('div', ['form__content']);
    formContent.element.append(inputsBlock.element, registerUpload.element);

    const form = new BaseComponent('form', ['form']);
    form.element.append(formContent.element, this.registerButtons.element);
    form.element.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submitForm();
    });

    this.element.appendChild(form.element);
  }

  checkInputs(): void {
    const { name, surname, email } = this.state;

    if (name !== '' && surname !== '' && email !== '') {
      this.registerButtons.toggleDisabled(false);
    } else {
      this.registerButtons.toggleDisabled(true);
    }
  }

  submitForm(): void {
    const res = JSON.stringify(this.state);
    localStorage.setItem('user', res);

    this.updateHeader();
    this.hidePopupCancel();
  }
}
