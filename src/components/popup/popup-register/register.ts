import { IUserData } from '../../../models/user-data-model';
import { BaseComponent } from '../../../utils/base-component';
import { RegisterContainer } from './register-container/register-container';

import './register.scss';

export class PopupRegister extends BaseComponent {
  hidePopupCancel: () => void = () => {};
  updateHeader: () => void = () => {};
  state: IUserData;

  constructor() {
    super('div', ['popup-register']);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };

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

// import { BaseComponent } from '../../../utils/base-component';
// import { InputGroup } from '../../UI/input/input';
// import { Button } from '../../UI/button/button';
// import { isValidEmail } from '../../shared/isValidEmail';
// import { IUserData } from '../../../models/user-data-model';
// import { isUsernameValid } from '../../shared/isValidUsername';
// import { RegisterContainer } from './register-container';

// export class PopupRegister extends BaseComponent {
//   hidePopupCancel: () => void = () => {};

//   state: IUserData;

//   constructor() {
//     super('div', ['popup-register']);

//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//     };
//     this.render();
//   }

//   // First name and Last name validation
//   userNameValidation: (event: Event, type: keyof IUserData) => void = (
//     event,
//     type,
//   ) => {
//     const { value } = event.target as HTMLInputElement;
//     const res = isUsernameValid(value);

//     if (res === true) {
//       this.state[type] = value;
//     }

//     return res;
//   };

//   // Email validation
//   emailValidation: (event: Event) => void = (event) => {
//     const { value } = event.target as HTMLInputElement;
//     const res = isValidEmail(value);

//     if (res === true) {
//       this.state.email = value;
//     }

//     return res;
//   };

//   render(): void {
//     const title = new BaseComponent('h2', ['popup__title', 'text-20']);
//     title.element.innerHTML = 'Register new Player';

//     const formContainer = new BaseComponent('div', ['popup__form']);

//     const form = new BaseComponent('form', ['form']);
//     formContainer.element.appendChild(form.element);

//     const formContent = new BaseComponent('div', ['form__content']);
//     form.element.appendChild(formContent.element);

//     const inputsBlock = new BaseComponent('div', ['form__inputs']);
//     formContent.element.appendChild(inputsBlock.element);

//     const firstName = new InputGroup('First Name');
//     firstName.handleInput = (event) =>
//       this.userNameValidation(event, 'firstName');

//     const lastName = new InputGroup('Last Name');
//     lastName.handleInput = (event) =>
//       this.userNameValidation(event, 'lastName');

//     const email = new InputGroup('Email');
//     email.handleInput = (event) => this.emailValidation(event);
//     inputsBlock.element.append(
//       firstName.element,
//       lastName.element,
//       email.element,
//     );

//     const formImage = new BaseComponent('div', ['form__image']);
//     formImage.element.innerHTML = `
//       <input class="form__input-upload" id="imageUpload" type="file" accept=".png, .jpg, .jpeg" />
//       <label for="imageUpload"></label>
//       <div class="form__image-preview">
//         <img src="/assets/upload-image/preview.png" />
//       </div>
//     `;
//     formContent.element.appendChild(formImage.element);

//     const formButtons = new BaseComponent('div', ['form__buttons']);
//     const addUser = new Button('submit', ['btn-primary'], 'add user');
//     addUser.element.setAttribute('disabled', '');
//     addUser.handleButton = (event) => {
//       event.preventDefault();
//     };
//     const close = new Button('button', ['btn-lightblue'], 'cancel');
//     close.handleButton = () => {
//       this.hidePopupCancel();
//     };

//     formButtons.element.append(addUser.element, close.element);

//     form.element.appendChild(formButtons.element);

//     this.element.appendChild(title.element);
//     this.element.appendChild(formContainer.element);
//   }
// }
