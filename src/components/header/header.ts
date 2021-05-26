import { BaseComponent } from '../../utils/base-component';
import './header.scss';
import { HeaderLogo } from './header-logo/header-logo';
import { HeaderNav } from './header-nav/header-nav';
import { HeaderProfile } from './heder-profile/header-profile';

export class Header extends BaseComponent {
  showRegisterPopup: () => void = () => {};
  updateButtons: () => void = () => {};
  startGame: () => void = () => {};
  private headerLogo: HeaderLogo;
  private headerNav: HeaderNav;
  private headerProfile: HeaderProfile;

  constructor() {
    super('header', ['header']);

    this.headerLogo = new HeaderLogo();
    this.headerNav = new HeaderNav();
    this.headerProfile = new HeaderProfile();

    this.render();
  }

  render(): void {
    const container = new BaseComponent('div', [
      'header__container',
      'container-fluid',
    ]);

    this.headerProfile.showRegisterPopup = () => {
      this.showRegisterPopup();
    };

    this.headerProfile.startGame = () => this.startGame();
    this.updateButtons = () => this.headerProfile.render();

    container.element.appendChild(this.headerLogo.element);
    container.element.appendChild(this.headerNav.element);
    container.element.appendChild(this.headerProfile.element);

    this.element.appendChild(container.element);
  }
}
