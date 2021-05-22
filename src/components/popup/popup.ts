import { BaseComponent } from '../../utils/base-component';
import './popup.scss';
import { PopupRegister } from './register/register';

export class Popup extends BaseComponent {
  private registerPopup: PopupRegister;

  private wrapper: BaseComponent;

  constructor() {
    super('div', ['popup']);
    this.wrapper = new BaseComponent('div', ['popup__wrapper']);

    this.registerPopup = new PopupRegister();
    this.registerPopup.hidePopupCancel = () => {
      this.hidePopup();
    };

    this.element.appendChild(this.wrapper.element);
    this.element.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) {
        this.hidePopup();
      }
    });
  }

  showPopup(type: string): void {
    if (type === 'register') {
      this.wrapper.element.appendChild(this.registerPopup.element);
    }
    this.togglePopup(true);
  }

  hidePopup(): void {
    this.togglePopup();
  }

  private togglePopup(show = false): void {
    this.element.classList.toggle('popup-show', show);
  }
}
