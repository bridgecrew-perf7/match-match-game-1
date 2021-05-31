import { BaseComponent } from '../../../utils/base-component';
import './popup-signin.scss';
import { RegisterContainer } from '../popup-register/register-container/register-container';
import { database } from '../../../_database/index';
import { Popup } from '../popup';
import { IPlayer } from '../../../models/player-model';

export class PopupSignIn extends BaseComponent {
  updateHeader: () => void = () => {};
  private errorPopup = new Popup('Email or password is not correct...');
  private state: IPlayer = {
    name: '',
    email: '',
    password: '',
    score: 0,
    img: '',
    surname: '',
  };

  constructor() {
    super('div', ['popup-sign-in']);

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
      'Sign In',
    );

    const registerContainer = new RegisterContainer(this.state, 'sign-in');
    registerContainer.hidePopupCancel = () => this.hidePopup();
    registerContainer.submitForm = () => {
      database.logIn(this.state).then((user: IPlayer | null) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.hidePopup();
          this.updateHeader();
          window.location.hash = '#/';
        } else {
          this.element.append(this.errorPopup.element);
        }
      });
    };

    wrapper.element.append(title.element, registerContainer.element);
    this.element.append(wrapper.element);
  }
}
