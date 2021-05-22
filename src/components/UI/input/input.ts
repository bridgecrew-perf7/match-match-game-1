import { BaseComponent } from '../../../utils/base-component';
import './input.scss';

export class InputGroup extends BaseComponent {
  handleInput: (event: Event) => void = () => {};

  private error: BaseComponent;

  private correctSpan: BaseComponent;

  private errorMessage: string;

  constructor(readonly title: string) {
    super('div', ['form__input-group']);
    this.title = title;
    this.errorMessage = '';

    this.error = new BaseComponent('p', ['input-error'], '');
    this.correctSpan = new BaseComponent('span', ['form__input-valid']);
    this.correctSpan.element.innerHTML = '<img src="assets/icons/check.svg" />';

    this.render();
  }

  updateError(event: Event): void {
    const res = this.handleInput(event);

    if (typeof res === 'string') {
      this.errorMessage = String(res);
      if (this.element.contains(this.correctSpan.element)) {
        this.element.removeChild(this.correctSpan.element);
      }
    }

    if (typeof res === 'boolean') {
      this.errorMessage = '';
      this.element.appendChild(this.correctSpan.element);
    }

    this.error.element.innerHTML = this.errorMessage;
    this.element.insertAdjacentElement('afterend', this.error.element);
  }

  render(): void {
    const input = new BaseComponent('input', ['form__input-control']);
    input.element.setAttribute('type', 'text');
    input.element.setAttribute('placeholder', this.title);
    input.element.addEventListener('input', (event: Event) =>
      this.updateError(event),
    );

    const label = new BaseComponent('label', ['form__input-label'], this.title);

    this.element.append(input.element, label.element);
    this.element.insertAdjacentElement('afterend', this.error.element);
  }
}
