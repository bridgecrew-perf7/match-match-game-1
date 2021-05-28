import { BaseComponent } from '../../../utils/base-component';
import './header-profile.scss';
import { Button } from '../../UI/button/button';
import { IUserData } from '../../../models/user-data-model';

export class HeaderProfile extends BaseComponent {
  showRegisterPopup: () => void = () => {};
  startGame: () => void = () => {};
  private user: IUserData | null | undefined;
  private buttonStart: Button;
  private buttonStop: Button;
  private buttonRegister: Button;
  private buttonLogOut: Button;
  private image = new Image();
  private isGameStated = false;

  constructor() {
    super('div', ['header__profile', 'profile']);

    this.buttonStart = new Button(
      'button',
      ['btn', 'profile__btn'],
      'start game',
    );
    this.buttonStart.handleButton = () => {
      this.isGameStated = true;
      this.startGame();
      this.render();
    };

    this.buttonStop = new Button(
      'button',
      ['btn', 'profile__btn'],
      'stop game',
    );
    this.buttonStop.handleButton = () => {
      this.stopGame();
      window.location.hash = '#/';
      window.location.hash = '#/best-scores';
    };

    this.buttonRegister = new Button(
      'button',
      ['profile__btn'],
      'register new player',
    );
    this.buttonRegister.handleButton = () => this.showRegisterPopup();

    this.buttonLogOut = new Button('button', ['profile__btn'], 'Log out');
    this.buttonLogOut.handleButton = () => {
      localStorage.removeItem('user');
      this.render();
    };

    this.image.classList.add('profile__img');
    this.render();
  }

  stopGame(): void {
    this.isGameStated = false;
    this.render();
  }

  render(): void {
    this.element.innerHTML = '';
    this.user = null;
    const getUser = localStorage.getItem('user');
    if (getUser) this.user = JSON.parse(getUser);

    const registerOrLogOut = this.user
      ? this.buttonLogOut.element
      : this.buttonRegister.element;

    this.element.append(
      this.isGameStated ? this.buttonStop.element : this.buttonStart.element,
      !this.isGameStated ? registerOrLogOut : '',
    );

    // this.element.append(
    //   this.user ? startOrStop : this.buttonRegister.element,
    //   this.user ? this.buttonLogOut.element : this.buttonRegister.element,
    // );

    const anonymousImage = '/assets/upload-image/user.png';
    this.image.src = this.user?.img || anonymousImage;
    if (this.user) this.element.appendChild(this.image);
  }
}
