import { IPlayer } from '../../../models/player-model';
import { BaseComponent } from '../../../utils/base-component';
import { config } from './../../../_config/index';
import './player.scss';
export class Player extends BaseComponent {
  constructor(readonly player: IPlayer) {
    super('div', ['best-players__item', 'player']);
    this.player = player;

    this.render();
  }

  render(): void {
    const anonymousImage = config.ANONYMOUS_IMAGE;
    const { name, surname, email, score, img } = this.player;

    this.element.innerHTML = `
      <div class="player__personal">
        <div class="player__image">
          <img src="${img || anonymousImage}" alt="Player Image">
        </div>
        <div>
          <h3 class="text-14">${name} ${surname}</h3>
          <a href="mailto:${email}" class="player__email text-12">${email}</a>
        </div>
      </div>
      <div class="player__score">
        <p class="text-14">Score: <span class="score">${score}</span></p>
      </div>
    `;
  }
}
