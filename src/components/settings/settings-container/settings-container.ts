import { ISelectData } from '../../../models/select-model';
import { BaseComponent } from '../../../utils/base-component';
import { SettingsSelect } from '../settings-select/settings-select';

export class SettingsContainer extends BaseComponent {
  private readonly settingsSelect: SettingsSelect[];

  state: [] = [];

  constructor(state: Array<ISelectData>) {
    super('div', ['settings__config']);
    this.settingsSelect = state.map(
      (selectData) => new SettingsSelect(selectData),
    );
    this.render();
  }

  render(): void {
    this.settingsSelect.forEach((item) => {
      this.element.appendChild(item.element);
    });
  }
}
