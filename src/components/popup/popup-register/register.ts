import { BaseComponent } from '../../../utils/base-component';
import { RegisterContainer } from './register-container/register-container';
import './register.scss';

import { database } from '../../../_database/index';
import { IUserData } from '../../../models/user-data-model';
import { Popup } from '../popup';

export class PopupRegister extends BaseComponent {
  hidePopupCancel: () => void = () => {};
  updateHeader: () => void = () => {};
  private state: IUserData;
  private errorPopup = new Popup('User with this email exists. Please log in!');

  constructor() {
    super('div', ['popup-register']);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      img: '',
    };
    this.render();
  }

  hidePopup(): void {
    this.element.remove();
  }

  // checkInputs(): void {
  //   const { name, surname, email } = this.state;

  //   if (name !== '' && surname !== '' && email !== '') {
  //     this.registerButtons.toggleDisabled(false);
  //   } else {
  //     this.registerButtons.toggleDisabled(true);
  //   }
  // }

  submitForm(): void {
    const data = { ...this.state, score: 0 };

    database.add(data).then((user) => {
      if (!user) {
        this.element.append(this.errorPopup.element);
      } else {
        const res = JSON.stringify(this.state);
        localStorage.setItem('user', res);

        this.updateHeader();
        this.hidePopupCancel();
        window.location.hash = '#/';
      }
    });
  }

  render(): void {
    const wrapper = new BaseComponent('div', ['popup-register__wrapper']);

    const title = new BaseComponent(
      'h2',
      ['popup__title', 'text-20'],
      'Register new Player',
    );

    const registerContainer = new RegisterContainer(this.state);
    registerContainer.hidePopupCancel = () => this.hidePopupCancel();
    registerContainer.updateHeader = () => this.updateHeader();
    registerContainer.submitForm = () => this.submitForm();

    wrapper.element.append(title.element, registerContainer.element);
    this.element.append(wrapper.element);
  }
}
