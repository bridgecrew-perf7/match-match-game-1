import { BaseComponent } from '../../../utils/base-component';
import { IAboutCard } from '../../../models/about-card-model';
import { AboutCard } from '../about-card/about-card';

export class AboutContainer extends BaseComponent {
  constructor(aboutCards: Array<IAboutCard>) {
    super('div', ['how-to-play__content']);

    const cards = aboutCards.map((card) => new AboutCard(card));
    cards.forEach((card) => this.element.appendChild(card.element));
  }
}
