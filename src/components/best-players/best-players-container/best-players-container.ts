import { BaseComponent } from '../../../utils/base-component';
import { Player } from '../player/player';

import './best-players-container.scss';

export class BestPlayersContainer extends BaseComponent {
  private persons: Player[] = [];

  constructor() {
    super('div', ['best-players__block']);
  }

  addPerson(persons: Player[]): void {
    this.persons = persons;

    this.persons.forEach((person) => this.element.appendChild(person.element));
  }
}
