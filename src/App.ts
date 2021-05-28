import { Header } from './components/header/header';
import { Router } from './router';
import { BaseComponent } from './utils/base-component';
import { PopupRegister } from './components/popup/popup-register/register';
import { Game } from './pages/game/game';

export class App {
  private header: Header;
  private readonly router: Router;
  private main = new BaseComponent('main', ['main']);
  private registerPopup: PopupRegister | undefined;
  private game: Game | undefined;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.router = new Router(this.main.element);
  }

  private showRegisterPopup(): void {
    localStorage.clear();
    this.registerPopup = new PopupRegister();
    this.registerPopup.updateHeader = () => {
      this.header.updateButtons();
    };
    this.rootElement.appendChild(this.registerPopup.element);

    this.registerPopup.hidePopupCancel = () => {
      if (this.registerPopup) {
        this.registerPopup.element.remove();
      }
    };
  }

  render(): void {
    this.header.showRegisterPopup = () => this.showRegisterPopup();
    this.header.startGame = () => {
      this.game = new Game();
      this.main.element.innerHTML = '';
      this.main.element.append(this.game.element);
    };

    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);

    this.router.initRouter();
  }
}
