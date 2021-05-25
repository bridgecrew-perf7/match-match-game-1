import { BaseComponent } from '../../../utils/base-component';
import { Card } from '../card/card';
import './cards-field.scss';

const SHOW_TIME = 3;

export class CardField extends BaseComponent {
  private cards: Card[] = [];
  private TYPE = JSON.parse(localStorage.getItem('difficulty') || '4');

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
    }, SHOW_TIME * 1000);
  }
}
