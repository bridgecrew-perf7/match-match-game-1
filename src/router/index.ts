import { IRoute } from '../models/router-model';
import { BestPlayers } from '../pages/best-players/best-players';
import { Settings } from '../pages/settings/settings';
import { About } from '../pages/about/about';

export class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;
  private readonly BestPlayers = new BestPlayers();
  private readonly GameSetting = new Settings();
  private readonly About = new About();

  constructor(private rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.routes = [
      {
        name: '/',
        component: () => {
          this.rootElement.appendChild(this.About.element);
        },
      },
      {
        name: '/best-scores',
        component: () => {
          this.rootElement.appendChild(this.BestPlayers.element);
        },
      },
      {
        name: '/game-settings',
        component: () => {
          this.rootElement.appendChild(this.GameSetting.element);
        },
      },
    ];

    this.defaultRoute = {
      name: 'Default router',
      component: () => {
        this.rootElement.innerHTML = 'Default Page';
      },
    };
  }

  updateRouter(): void {
    this.rootElement.innerHTML = '';
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routes.find((p) => p.name === currentRouteName);

    (currentRoute || this.defaultRoute).component();
  }

  initRouter(): void {
    if (window.location.hash === '') {
      window.location.hash = '#/';
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}
