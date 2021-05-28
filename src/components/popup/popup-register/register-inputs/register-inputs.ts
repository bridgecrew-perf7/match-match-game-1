import { IUserData } from '../../../../models/user-data-model';
import { BaseComponent } from '../../../../utils/base-component';
import { isValidEmail } from '../../../shared/isValidEmail';
import { isUsernameValid } from '../../../shared/isValidUsername';
import { InputGroup } from '../../../UI/input/input';

import './register-inputs.scss';

export class RegisterInputs extends BaseComponent {
  checkInputs: () => void = () => {};

  constructor(public state: IUserData) {
    super('div', ['form__inputs']);

    this.state = state;
    this.render();
  }

  // First name and Last name validation
  private userNameValidation: (event: Event, type: keyof IUserData) => void = (
    event,
    type,
  ) => {
    const { value } = event.target as HTMLInputElement;
    const res = isUsernameValid(value);

    if (res === true) {
      this.state[type] = value;
    } else {
      this.state[type] = '';
    }

    this.checkInputs();
    return res;
  };

  // Email validation
  private emailValidation: (event: Event) => void = (event) => {
    const { value } = event.target as HTMLInputElement;
    const res = isValidEmail(value);

    if (res === true) {
      this.state.email = value;
    } else {
      this.state.email = '';
    }

    this.checkInputs();
    return res;
  };

  render(): void {
    const firstName = new InputGroup('First Name');
    firstName.handleInput = (event) => this.userNameValidation(event, 'name');

    const lastName = new InputGroup('Last Name');
    lastName.handleInput = (event) => this.userNameValidation(event, 'surname');

    const email = new InputGroup('Email');
    email.handleInput = (event) => this.emailValidation(event);

    this.element.append(firstName.element, lastName.element, email.element);
  }
}
