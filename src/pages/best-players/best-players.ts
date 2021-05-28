import { BestPlayersContainer } from '../../components/best-players/best-players-container/best-players-container';
import { BaseComponent } from '../../utils/base-component';
import { Player } from '../../components/best-players/player/player';
import { IPlayer } from '../../models/player-model';
import { database } from '../../_database/index';

import './best-players.scss';

export class BestPlayers extends BaseComponent {
  private bestPlatersContainer: BestPlayersContainer;

  constructor(readonly players: [] = []) {
    super('div', ['best-players', 'container']);
    this.getBestPlayers();
    this.bestPlatersContainer = new BestPlayersContainer();
    this.render();
  }

  private async getBestPlayers(): Promise<void> {
    const data = await database.getAllUsers<IPlayer>();

    const persons = data.map((player: IPlayer) => new Player(player));
    this.bestPlatersContainer.addPerson(persons);
  }

  render(): void {
    const title = new BaseComponent('h2', ['text-20'], 'Best Players');

    this.element.append(title.element, this.bestPlatersContainer.element);
  }
}
