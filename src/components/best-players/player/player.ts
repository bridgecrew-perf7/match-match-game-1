import { IPlayer } from '../../../models/player-model';
import { BaseComponent } from '../../../utils/base-component';
import './player.scss';

export class Player extends BaseComponent {
  constructor(readonly player: IPlayer) {
    super('div', ['best-players__item', 'player']);
    this.player = player;
    this.render();
  }

  render(): void {
    const anonymousImage = '/assets/upload-image/user.png';

    this.element.innerHTML = `
      <div class="player__personal">
        <div class="player__image">
          <img src="${this.player.img || anonymousImage}" alt="Player Image">
        </div>
        <div>
          <h3 class="text-14">${this.player.username}</h3>
          <a href="mailto:${this.player.mail}" class="player__email text-12">${
      this.player.mail
    }</a>
        </div>
      </div>
      <div class="player__score">
        <p class="text-14">Score: <span class="score">${
          this.player.score
        }</span></p>
      </div>
    `;
  }
}
