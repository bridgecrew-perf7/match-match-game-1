import { Header } from './components/header/header';
import { Router } from './router';
import { BaseComponent } from './utils/base-component';
import { PopupRegister } from './components/popup/popup-register/register';

export class App {
  private header: Header;
  private readonly router: Router;
  private main = new BaseComponent('main', ['main']);
  private readonly registerPopup: PopupRegister = new PopupRegister();

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.router = new Router(this.main.element);
  }

  render(): void {
    this.header.onMyButtonClick = () => {
      this.rootElement.appendChild(this.registerPopup.element);

      this.registerPopup.hidePopupCancel = () => {
        this.registerPopup.element.remove();
      };
    };

    this.registerPopup.updateHeader = () => {
      this.header.updateButtons();
    };

    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);

    this.router.initRouter();
  }
}
