import { BaseComponent } from '../../../utils/base-component';
import './header-profile.scss';
import { Button } from '../../UI/button/button';
import { IUserData } from '../../../models/user-data-model';

export class HeaderProfile extends BaseComponent {
  showRegisterPopup: () => void = () => {};
  startGame: () => void = () => {};
  private user: IUserData | null | undefined;
  private buttonStart: BaseComponent;
  private buttonRegister: Button;
  private buttonLogOut: Button;
  private image = new Image();

  constructor() {
    super('div', ['header__profile', 'profile']);

    this.buttonStart = new BaseComponent(
      'button',
      ['btn', 'profile__btn'],
      'start game',
    );
    this.buttonStart.element.addEventListener('click', () => {
      this.startGame();
    });

    this.buttonRegister = new Button(
      'button',
      ['profile__btn'],
      'register new player',
    );
    this.buttonRegister.handleButton = () => this.showRegisterPopup();

    this.buttonLogOut = new Button('button', ['profile__btn'], 'Log out');
    this.buttonLogOut.handleButton = () => {
      localStorage.removeItem('user');
      this.updateButtons();
    };

    this.image.classList.add('profile__img');

    this.render();
  }

  updateButtons(): void {
    this.render();
  }

  render(): void {
    this.user = null;
    const userFromLocal = localStorage.getItem('user');
    if (userFromLocal) this.user = JSON.parse(userFromLocal);

    this.element.innerHTML = '';

    this.element.append(
      this.user ? this.buttonStart.element : this.buttonRegister.element,
      this.user ? this.buttonLogOut.element : this.buttonRegister.element,
    );

    const anonymousImage = '/assets/upload-image/user.png';
    this.image.src = this.user?.img || anonymousImage;
    if (this.user) this.element.appendChild(this.image);
  }
}
