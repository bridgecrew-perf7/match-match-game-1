import { BaseComponent } from '../../../utils/base-component';
import './card.scss';
import { config } from '../../../_config/index';

export class Card extends BaseComponent {
  private card: BaseComponent;

  private cardFront: BaseComponent;

  private cardBack: BaseComponent;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.image = image;

    this.card = new BaseComponent('div', ['card']);
    this.cardFront = new BaseComponent('div', ['card__front']);
    this.cardBack = new BaseComponent('div', ['card__back']);

    this.render();
  }

  success(): void {
    this.element.classList.add('card-success');
  }

  error(type = false): void {
    this.element.classList.toggle('card-error', type);
  }

  flipToBack(): Promise<void> {
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(config.FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  render(): void {
    this.cardFront.element.setAttribute(
      'style',
      `background-image: url('./assets/game/images/${this.image}')`,
    );

    this.card.element.append(this.cardFront.element, this.cardBack.element);
    this.element.appendChild(this.card.element);
  }
}
