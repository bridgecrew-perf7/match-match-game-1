import { BaseComponent } from '../../../utils/base-component';
import './header-profile.scss';
import { Button } from '../../UI/button/button';

export class HeaderProfile extends BaseComponent {
  onMyButtonClick: () => void = () => {};
  startGame: () => void = () => {};
  private user: string | undefined;
  private buttonStart: BaseComponent;
  private buttonRegister: Button;
  private buttonLogOut: Button;

  constructor() {
    super('div', ['header__profile', 'profile']);

    this.buttonStart = new BaseComponent(
      'a',
      ['btn', 'profile__btn'],
      'start game',
    );
    this.buttonStart.element.setAttribute('href', '#/game');
    this.buttonStart.element.addEventListener('click', () => {
      this.startGame();
    });

    this.buttonRegister = new Button(
      'button',
      ['profile__btn'],
      'register new player',
    );
    this.buttonRegister.handleButton = () => this.onMyButtonClick();

    this.buttonLogOut = new Button('button', ['profile__btn'], 'Log out');
    this.buttonLogOut.handleButton = () => {
      localStorage.removeItem('user');
      this.updateButtons();
    };

    this.render();
  }

  updateButtons(): void {
    this.render();
  }

  render(): void {
    this.user = localStorage.getItem('user') || '';
    this.element.innerHTML = '';

    this.element.append(
      this.user ? this.buttonStart.element : this.buttonRegister.element,
      this.user ? this.buttonLogOut.element : this.buttonRegister.element,
    );
  }
}
