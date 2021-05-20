import { BaseComponent } from '../../../utils/base-component';
import { InputGroup } from '../../UI/input/input';
import { Button } from '../../UI/button/button';
import { isValidEmail } from '../../shared/isValidEmail';

interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
}

export class PopupRegister extends BaseComponent {
  hidePopupCancel: () => void = () => {};

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

  userNameValidation: (event: Event) => string = (event) => {
    const errors = [
      'Имя не может быть пустым',
      'Имя не может состоять из цифр',
      'Имя не может содержать служебные символы',
    ];
    const { value } = event.target as HTMLInputElement;

    if (value === '') {
      return errors[0];
    }
    if (/\d/.test(value)) {
      return errors[1];
    }
    if (!/^[a-zA-zА-Я]+$/i.test(value)) {
      return errors[2];
    }

    this.state.firstName = value;

    return '';
  };

  emailValidation: (event: Event) => string = (event) => {
    const errors = [
      'Имя не может быть пустым',
      'должен соответствовать стандартному правилу формированию email',
    ];
    const { value } = event.target as HTMLInputElement;

    if (value === '') {
      return errors[0];
    }
    if (!isValidEmail(value)) {
      return errors[1];
    }

    return '';
  };

  render(): void {
    const title = new BaseComponent('h2', ['popup__title', 'text-20']);
    title.element.innerHTML = 'Register new Player';

    const formContainer = new BaseComponent('div', ['popup__form']);

    const form = new BaseComponent('form', ['form']);
    formContainer.element.appendChild(form.element);

    const formContent = new BaseComponent('div', ['form__content']);
    form.element.appendChild(formContent.element);

    const inputsBlock = new BaseComponent('div', ['form__inputs']);
    formContent.element.appendChild(inputsBlock.element);

    const firstName = new InputGroup('First Name');
    firstName.handleInput = (event) => this.userNameValidation(event);

    const lastName = new InputGroup('Last Name');
    lastName.handleInput = (event) => this.userNameValidation(event);

    const email = new InputGroup('Email');
    email.handleInput = (event) => this.emailValidation(event);
    inputsBlock.element.append(
      firstName.element,
      lastName.element,
      email.element,
    );

    const formImage = new BaseComponent('div', ['form__image']);
    formImage.element.innerHTML = `
      <input class="form__input-upload" id="imageUpload" type="file" accept=".png, .jpg, .jpeg" />
      <label for="imageUpload"></label>
      <div class="form__image-preview">
        <img src="/assets/upload-image/preview.png" />
      </div>
    `;
    formContent.element.appendChild(formImage.element);

    const formButtons = new BaseComponent('div', ['form__buttons']);
    const addUser = new Button('submit', ['btn-primary'], 'add user');
    addUser.handleButton = (event) => {
      event.preventDefault();
      console.log(JSON.stringify(this.state));
    };
    const close = new Button('button', ['btn-lightblue'], 'cancel');
    close.handleButton = () => this.hidePopupCancel();

    formButtons.element.append(addUser.element, close.element);

    form.element.appendChild(formButtons.element);

    this.element.appendChild(title.element);
    this.element.appendChild(formContainer.element);
  }
}
