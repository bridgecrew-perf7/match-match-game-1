import { BaseComponent } from '../../utils/base-component';
import { Card } from '../../components/game/card/card';
import { CardField } from '../../components/game/cards-field/cards-field';
import { delay } from '../../components/shared/delay';
import { GameTimer } from '../../components/game/game-timer/game-timer';
import { ImageCategoryModel } from '../../models/image-category-model';

const FLIP_DELAY = 1500;
const CARDS = 8;

export class Game extends BaseComponent {
  private readonly cardsFields: CardField;

  private readonly gameTimer: GameTimer;

  private activeCard?: Card;

  private isAnimation = false;

  correctAnswers: number;

  constructor() {
    super('div', ['game', 'container']);
    this.gameTimer = new GameTimer();
    this.cardsFields = new CardField();
    this.element.appendChild(this.gameTimer.element);
    this.element.appendChild(this.cardsFields.element);

    this.getImages();

    this.correctAnswers = 0;
  }

  newGame(images: string[]): void {
    this.cardsFields.clear();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.handleCard(card));
    });

    this.cardsFields.addCards(cards);

    setTimeout(() => this.gameTimer.startTrack(), 3000);
  }

  async getImages(): Promise<void> {
    const res = await fetch('gameImages.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0];
    const images = cat.images
      .slice(0, CARDS)
      .map((name) => `${cat.category}/${name}`);

    this.newGame(images);
  }

  private async handleCard(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.activeCard.error(true);
      card.error(true);

      await delay(FLIP_DELAY);

      await Promise.all([
        this.activeCard.error(),
        card.error(),
        this.activeCard.flipToBack(),
        card.flipToBack(),
      ]);
    } else {
      this.correctAnswers++;
      card.success();
      this.activeCard.success();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
