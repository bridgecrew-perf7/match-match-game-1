import { BaseComponent } from '../../utils/base-component';
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <div class="header__container container-fluid">
        <div class="header__logo">
            <img src="assets/logo.svg" alt="">
        </div>
        <nav class="header__nav nav">
            <ul class="nav__list">
                <li class="nav__item nav__item--active">
                    <a href="#/" class="nav__link">
                        <img src="assets/icons/question.svg" class="nav__item-icon" alt="">
                        <span class="nav__item-title text-12">About Game</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#/best-scores" class="nav__link">
                        <img src="assets/icons/stars.svg" class="nav__item-icon" alt="">
                        <span class="nav__item-title text-12">Best Score</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#/game-settings" class="nav__link">
                        <img src="assets/icons/settings.svg" class="nav__item-icon" alt="">
                        <span class="nav__item-title text-12">Game Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="header__profile profile">
            <a href="#/game" class="btn profile__btn">start game</a>
            <button class="btn profile__btn">register new player</button>
        </div>
      </div>
    `;
  }
}
