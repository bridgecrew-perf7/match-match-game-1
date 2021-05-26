import { App } from './App';
import { database } from './_database/index';
import './index.scss';

window.addEventListener('load', () => {
  const appElement = document.body;
  database.init('AzizbekSavkimov').then(() => {
    const app = new App(appElement);
    app.render();
  });
});
