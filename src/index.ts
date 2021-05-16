import { App } from './App';
import './index.scss';

window.addEventListener('load', () => {
  const appElement = document.body;

  const app = new App(appElement);
  app.render();
});
