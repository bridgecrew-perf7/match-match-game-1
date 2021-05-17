import { IAboutCard } from '../../../models/about-card-model';
import { BaseComponent } from '../../../utils/base-component';
import './about-card.scss';

export class AboutCard extends BaseComponent {
  cardData: IAboutCard;

  constructor(cardData: IAboutCard) {
    super('div', ['how-to-play__card', 'about-card']);
    this.cardData = cardData;
    this.render();
  }

  render(): void {
    this.element.innerHTML = `
      <div class="about-card__content">
        <div class="about-card__number">
          <span class="text-24">${this.cardData.number}</span>
        </div>
        <div class="about-card__desc">
          <p class="text-14">${this.cardData.description}</p>
        </div>
      </div>
      <div class="about-card__img">
        <img src="./assets/how-to-play/${this.cardData.img}" alt="Image ${this.cardData.number}" />
      </div>
    `;
  }
}
