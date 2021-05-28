import { BestPlayersContainer } from '../../components/best-players/best-players-container/best-players-container';
import { BaseComponent } from '../../utils/base-component';
import { Player } from '../../components/best-players/player/player';
import { IPlayer } from '../../models/player-model';

import './best-players.scss';
import { database } from '../../_database/index';
import { delay } from '../../components/shared/delay';

export class BestPlayers extends BaseComponent {
  private bestPlatersContainer: BestPlayersContainer;

  constructor(readonly players: [] = []) {
    super('div', ['best-players', 'container']);
    this.bestPlatersContainer = new BestPlayersContainer();
    this.render();
  }

  private async fetchData(): Promise<void> {
    const data = await database.getAllUsers<IPlayer>();

    const persons = data.map((player: IPlayer) => new Player(player));
    this.bestPlatersContainer.addPerson(persons);
  }

  render(): void {
    const container = document.createElement('div');
    container.classList.add('best-players__container');

    const app = this.element.appendChild(container);
    app.insertAdjacentHTML(
      'afterbegin',
      '<h2 class="text-20">Best players</h2>',
    );

    this.fetchData();
    app.appendChild(this.bestPlatersContainer.element);
  }
}
