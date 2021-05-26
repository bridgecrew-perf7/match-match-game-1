import { BaseComponent } from '../../../utils/base-component';
import './button.scss';

export class Button extends BaseComponent {
  handleButton: (event: Event) => void = () => {};

  constructor(
    readonly type: string,
    readonly styles: string[] = [],
    readonly text: string,
  ) {
    super('button', ['btn', ...styles], text);
    this.element.setAttribute('type', type);
    this.element.addEventListener('click', (event) => this.handleButton(event));
  }
}
