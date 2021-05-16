import { ISelectData } from '../../../models/select-model';
import { BaseComponent } from '../../../utils/base-component';
import { Select } from '../../UI/select/select';

export class SettingsSelect extends BaseComponent {
  constructor(selectData: ISelectData) {
    super('div', ['settings__block']);

    const title = new BaseComponent('h3', ['text-20']);
    const selectBlock = new BaseComponent('div', ['settings__select']);
    const select = new Select(selectData);

    title.element.innerHTML = selectData.title;
    selectBlock.element.appendChild(select.element);

    this.element.appendChild(title.element);
    this.element.appendChild(selectBlock.element);
  }
}
