import { Header } from './components/header/header';
import { Router } from './router';
import { BaseComponent } from './utils/base-component';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private main = new BaseComponent('main', ['main']);

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.router = new Router(this.main.element);
  }

  render(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.main.element);

    this.router.initRouter();
  }
}
