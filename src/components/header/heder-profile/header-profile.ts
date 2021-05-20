import { BaseComponent } from '../../../utils/base-component';
import './header-profile.scss';

export class HeaderProfile extends BaseComponent {
  onMyButtonClick: () => void = () => {};

  constructor() {
    super('div', ['header__profile', 'profile']);

    const startGame = new BaseComponent(
      'a',
      ['btn', 'profile__btn'],
      'start game',
    );
    startGame.element.setAttribute('href', '#/game');

    const register = new BaseComponent(
      'button',
      ['btn', 'profile__btn'],
      'register new player',
    );
    register.element.addEventListener('click', () => {
      this.onMyButtonClick();
    });

    this.element.appendChild(startGame.element);
    this.element.appendChild(register.element);
  }
}
