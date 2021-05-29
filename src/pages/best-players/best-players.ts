import { BestPlayersContainer } from '../../components/best-players/best-players-container/best-players-container';
import { BaseComponent } from '../../utils/base-component';
import { Player } from '../../components/best-players/player/player';
import { IPlayer } from '../../models/player-model';
import { database } from '../../_database/index';

import './best-players.scss';

const getBestPlayers = async (): Promise<Array<Player>> => {
  const data = await database.getAllUsers<IPlayer>();

  const persons = data.map((player: IPlayer) => new Player(player));
  return persons;
};

export async function BestPlayers(): Promise<HTMLElement> {
  const { element } = new BaseComponent('div', ['best-players', 'container']);
  const bestPlatersContainer = new BestPlayersContainer();

  const title = new BaseComponent('h2', ['text-20'], 'Best Players');
  const container = new BaseComponent('div', ['best-players__container']);

  element.append(
    title.element,
    container.element,
    bestPlatersContainer.element,
  );

  bestPlatersContainer.addPerson(await getBestPlayers());
  return element;
}
