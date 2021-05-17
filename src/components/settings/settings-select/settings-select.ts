import { ISelectData } from '../../../models/select-model';
import { BaseComponent } from '../../../utils/base-component';
import { Select } from '../../UI/select/select';

export class SettingsSelect extends BaseComponent {
  private selectData: ISelectData;

  private title: BaseComponent;

  private selectBlock: BaseComponent;

  private select: BaseComponent;

  constructor(selectData: ISelectData) {
    super('div', ['settings__block']);
    this.selectData = selectData;

    this.title = new BaseComponent('h3', ['text-20']);
    this.selectBlock = new BaseComponent('div', ['settings__select']);
    this.select = new Select(selectData);

    this.render();
  }

  render(): void {
    this.title.element.innerHTML = this.selectData.title;
    this.selectBlock.element.appendChild(this.select.element);

    this.element.appendChild(this.title.element);
    this.element.appendChild(this.selectBlock.element);
  }
}
