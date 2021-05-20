import { BaseComponent } from '../../../utils/base-component';
import './header-logo.scss';

export class HeaderLogo extends BaseComponent {
  constructor() {
    super('div', ['header__logo']);
    const img = new BaseComponent('img');
    img.element.setAttribute('src', 'assets/logo.svg');

    this.element.appendChild(img.element);
  }
}
