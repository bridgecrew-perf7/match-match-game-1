import { IAboutCard } from '../../../models/about-card-model';
import { BaseComponent } from '../../../utils/base-component';
import './about-card.scss';

export class AboutCard extends BaseComponent {
  constructor(cardData: IAboutCard) {
    super('div', ['how-to-play__card', 'about-card']);

    this.element.innerHTML = `
      <div class="about-card__content">
        <div class="about-card__number">
          <span class="text-24">${cardData.number}</span>
        </div>
        <div class="about-card__desc">
          <p class="text-14">${cardData.description}</p>
        </div>
      </div>
      <div class="about-card__img">
        <img src="./assets/how-to-play/${cardData.img}" alt="Image ${cardData.number}" />
      </div>
    `;
  }
}
