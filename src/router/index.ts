import { IRoute } from '../models/router-model';
import { BestPlayers } from '../pages/best-players/best-players';
import { Settings } from '../pages/settings/settings';
import { About } from '../pages/about/about';

export class Router {
  private readonly routes: Array<IRoute>;
  private defaultRoute: IRoute;

  constructor(private rootElement: HTMLElement) {
    this.rootElement = rootElement;

    this.routes = [
      {
        name: '/',
        component: () => {
          const aboutPage = new About();
          this.rootElement.appendChild(aboutPage.element);
        },
      },
      {
        name: '/best-scores',
        component: async () => {
          const bestPlayersPage = await BestPlayers();
          this.rootElement.appendChild(bestPlayersPage);
        },
      },
      {
        name: '/game-settings',
        component: () => {
          const gameSettingsPage = new Settings();
          this.rootElement.appendChild(gameSettingsPage.element);
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
