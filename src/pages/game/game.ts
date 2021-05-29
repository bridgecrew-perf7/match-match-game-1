import { BaseComponent } from '../../utils/base-component';
import { Card } from '../../components/game/card/card';
import { CardField } from '../../components/game/cards-field/cards-field';
import { delay } from '../../components/shared/delay';
import { GameTimer } from '../../components/game/game-timer/game-timer';
import { ImageCategoryModel } from '../../models/image-category-model';
import { PopupCongratulations } from '../../components/popup/popup-congratulations/congratulations';
import { database } from '../../_database/index';
import { getFromLocalStorage } from '../../components/shared/getFromLocalStorage';
import { config } from '../../_config/index';

export class Game extends BaseComponent {
  private readonly cardsFields: CardField; // исправить
  private readonly gameTimer: GameTimer;
  private popupCongratulations: PopupCongratulations | undefined;
  private activeCard?: Card;
  private isAnimation = false;
  private correctAnswers = 0;
  private notCorrectAnswers = 0;
  private CARDS = Number(getFromLocalStorage('difficulty', '4'));
  private TYPE = getFromLocalStorage('game-cards', 'animals');
  private cardsLength = (this.CARDS * this.CARDS) / 2;

  constructor() {
    super('div', ['game', 'container']);
    this.gameTimer = new GameTimer();
    this.cardsFields = new CardField();
    this.element.appendChild(this.gameTimer.element);
    this.element.appendChild(this.cardsFields.element);

    this.getImages();
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
    setTimeout(() => this.gameTimer.startTrack(), config.START_AFTER);
  }

  async getImages(): Promise<void> {
    const res = await fetch('gameImages.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories.filter((item) => item.category === this.TYPE)[0];

    const images = cat.images
      .slice(0, this.cardsLength)
      .map((name) => `${cat.category}/${name}`);

    this.newGame(images);
  }

  private congratulations() {
    const time = this.gameTimer.stopTimer();

    // score
    const compares = this.correctAnswers + this.notCorrectAnswers;
    const timeInSeconds = (time.min * 60 + time.sec) * 10;

    const user = localStorage.getItem('user');

    if (user) {
      const res = JSON.parse(user);
      res.score = (compares - this.notCorrectAnswers) * 100 - timeInSeconds;

      database.add(res);
    }

    this.popupCongratulations = new PopupCongratulations(time);
    this.element.append(this.popupCongratulations.element);
  }

  private async handleCard(card: Card): Promise<void> {
    if (this.isAnimation) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.notCorrectAnswers++;
      this.activeCard.error(true);
      card.error(true);

      await delay(config.FLIP_DELAY);

      await Promise.all([
        this.activeCard.error(),
        card.error(),
        this.activeCard.flipToBack(),
        card.flipToBack(),
      ]);
    } else {
      this.correctAnswers++;

      if (this.correctAnswers === this.cardsLength) {
        this.congratulations();
      }

      card.success();
      this.activeCard.success();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
