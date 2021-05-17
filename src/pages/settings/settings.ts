import { BaseComponent } from '../../utils/base-component';
import { SettingsContainer } from '../../components/settings/settings-container/settings-container';
import { ISelectData } from '../../models/select-model';
import './settings.scss';

export class Settings extends BaseComponent {
  private state: Array<ISelectData> = [];

  private settingsContainer: SettingsContainer | undefined;

  constructor() {
    super('div', ['settings', 'container']);

    this.render();
  }

  async fetchData(): Promise<void> {
    try {
      const res = await fetch('./settings.json');
      const data = await res.json();

      this.state = data[0].selects;
    } catch (err) {
      throw new Error('Failed fetching from settings...');
    }
  }

  async render(): Promise<void> {
    await this.fetchData();

    this.settingsContainer = new SettingsContainer(this.state);
    this.element.appendChild(this.settingsContainer.element);
  }
}
