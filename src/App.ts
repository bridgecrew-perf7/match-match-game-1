import { Header } from './components/header/header';
import { Router } from './router';
import { BaseComponent } from './utils/base-component';
import { Popup } from './components/popup/popup';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private main = new BaseComponent('main', ['main']);

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.router = new Router(this.main.element);
  }

  render(): void {
    const popup = new Popup();
    this.header.onMyButtonClick = () => {
      popup.showPopup('register');
    };

    this.rootElement.appendChild(popup.element);
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);

    this.router.initRouter();
  }
}
