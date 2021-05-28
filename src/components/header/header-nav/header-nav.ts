import { INavItem } from '../../../models/nav-item-model';
import { BaseComponent } from '../../../utils/base-component';
import './header-nav.scss';

export class HeaderNav extends BaseComponent {
  private data: Array<INavItem> = [];
  private ul: BaseComponent = new BaseComponent('ul', ['nav__list']);
  private items: BaseComponent[] = [];

  constructor() {
    super('nav', ['header__nav', 'nav']);
    this.getNavbarData();
  }

  async getNavbarData(): Promise<void> {
    const data = await fetch('./navbar.json');
    const res = await data.json();

    this.data = res;
    this.updateActive();
    this.render();
  }

  updateActive(): void {
    const hash = window.location.hash.split('#/').join('');

    this.data = this.data.map((item) => {
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
    this.items = this.data.map((item) => {
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
