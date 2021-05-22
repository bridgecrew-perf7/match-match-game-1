import { BaseComponent } from '../../../utils/base-component';

import './header-nav.scss';

export class HeaderNav extends BaseComponent {
  private Items = [
    {
      url: '',
      img: 'question',
      title: 'About Game',
      active: true,
    },
    {
      url: 'best-scores',
      img: 'stars',
      title: 'Best Score',
      active: false,
    },
    {
      url: 'game-settings',
      img: 'settings',
      title: 'Game Settings',
      active: false,
    },
  ];

  private ul: BaseComponent;

  private items: BaseComponent[] = [];

  constructor() {
    super('nav', ['header__nav', 'nav']);

    window.addEventListener('hashchange', () => this.updateActive());

    this.ul = new BaseComponent('ul', ['nav__list']);
    this.render();
    this.updateActive();
  }

  updateActive(): void {
    const hash = window.location.hash.split('#/').join('');

    this.Items = this.Items.map((item) => {
      if (item.url === hash) {
        item.active = true;
      } else {
        item.active = false;
      }

      return item;
    });

    this.render();
  }

  render(): void {
    this.items = this.Items.map((item) => {
      const li = new BaseComponent('li', ['nav__item']);

      li.element.classList.add(item.active ? 'nav__item--active' : 'a');
      li.element.innerHTML = `
        <a href="#/${item.url}" class="nav__link">
            <img src="assets/icons/${item.img}.svg" class="nav__item-icon" alt="">
            <span class="nav__item-title text-12">${item.title}</span>
        </a>
      `;

      return li;
    });

    this.ul.element.innerHTML = '';
    this.items.forEach((item) => {
      this.ul.element.appendChild(item.element);
    });

    this.element.appendChild(this.ul.element);
  }
}
