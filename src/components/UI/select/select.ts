import { ISelectData } from '../../../models/select-model';
import { BaseComponent } from '../../../utils/base-component';
import './select.scss';

export class Select extends BaseComponent {
  constructor(selectData: ISelectData) {
    super('select', ['select']);
    this.element.setAttribute('name', selectData.id);
    this.element.setAttribute('id', selectData.id);

    const options = selectData.options.map((option) => `
      <option 
        ${option.selected ? 'selected disabled' : ''}
        value="${option.value}">
        ${option.title}
      </option>`);

    this.element.innerHTML = `${options}`;
  }
}
