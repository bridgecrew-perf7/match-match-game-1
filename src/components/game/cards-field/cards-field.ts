import { BaseComponent } from '../../../utils/base-component';
import { config } from '../../../_config';
import { Card } from '../card/card';
import { getFromLocalStorage } from '../../shared/getFromLocalStorage';
import './cards-field.scss';

export class CardField extends BaseComponent {
  private cards: Card[] = [];
  private TYPE = getFromLocalStorage('difficulty', '4');

  constructor() {
    super('div', ['cards-field']);
    this.element.classList.add(`cards-field-${this.TYPE}`);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.append(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, config.START_AFTER);
  }
}
