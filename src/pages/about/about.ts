import { BaseComponent } from '../../utils/base-component';
import { AboutContainer } from '../../components/about/about-container/about-container';
import './about.scss';
import { IAboutCard } from '../../models/about-card-model';

export class About extends BaseComponent {
  private cards: Array<IAboutCard> = [];

  constructor() {
    super('div', ['hot-to-play', 'container']);

    this.render();
  }

  async renderAboutCards(): Promise<void> {
    try {
      const res = await fetch('about.json');
      const data = await res.json();

      this.cards = data[0].cards;

      const content = new AboutContainer(this.cards);
      this.element.appendChild(content.element);
    } catch (err) {
      throw new Error('About cards not fetched...');
    }
  }

  render(): void {
    const title = new BaseComponent('h2', ['text-20'], 'How To Play?');
    this.element.appendChild(title.element);

    this.renderAboutCards();
  }
}
