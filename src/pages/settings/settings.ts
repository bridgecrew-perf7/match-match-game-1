import { BaseComponent } from '../../utils/base-component';
import { SettingsContainer } from '../../components/settings/settings-container/settings-container';
import { ISelectData } from '../../models/select-model';
import './settings.scss';

export class Settings extends BaseComponent {
  private state: Array<ISelectData> = [
    {
      title: 'Game cards',
      id: 'game-cards',
      options: [
        {
          title: 'select game cards type',
          value: 'none',
          selected: 'selected',
        },
        {
          title: 'animals',
          value: 'animals',
        },
        {
          title: 'cars',
          value: 'cars',
        },
      ],
    },
    {
      title: 'Difficulty',
      id: 'difficulty',
      options: [
        {
          title: 'select game type',
          value: 'none',
          selected: 'selected',
        },
        {
          title: '2 x 2',
          value: '2',
        },
        {
          title: '4 x 4',
          value: '4',
        },
        {
          title: '6 x 6',
          value: '6',
        },
      ],
    },
  ];

  private readonly SettingsContainer = new SettingsContainer(this.state);

  constructor() {
    super('div', ['settings', 'container']);

    this.element.appendChild(this.SettingsContainer.element);
  }
}
