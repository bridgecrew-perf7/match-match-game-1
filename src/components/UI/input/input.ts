import { BaseComponent } from '../../../utils/base-component';
import './input.scss';

export class InputGroup extends BaseComponent {
  handleInput: (event: Event) => void = () => {};

  error: BaseComponent;

  private errorMessage: string;

  constructor(readonly title: string) {
    super('div', ['form__input-group']);
    this.element.innerHTML = `
      <input class="form__input-control" type="text" placeholder="${title}" />
      <label class="form__input-label">${title}</label>
      <span class="form__input-valid">!</span>
    `;
    this.errorMessage = '';

    this.error = new BaseComponent('p', ['input-error'], '');
    this.element.insertAdjacentElement('afterend', this.error.element);

    const eventInput = this.element.querySelector('input');
    eventInput?.addEventListener('input', (event) => this.updateError(event));
  }

  updateError(event: Event): void {
    const res = this.handleInput(event);

    if (typeof res === 'string') {
      this.errorMessage = String(res);
    } else {
      this.errorMessage = '';
    }

    this.error.element.innerHTML = this.errorMessage;
    this.element.insertAdjacentElement('afterend', this.error.element);
  }
}
