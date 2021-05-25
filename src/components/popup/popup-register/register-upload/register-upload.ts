import { BaseComponent } from '../../../../utils/base-component';

import './register-upload.scss';

export class RegisterUpload extends BaseComponent {
  constructor() {
    super('div', ['form__image']);
    this.element.innerHTML = `
      <input class="form__input-upload" id="imageUpload" type="file" accept=".png, .jpg, .jpeg" />
      <label for="imageUpload"></label>
      <div class="form__image-preview">
        <img src="/assets/upload-image/preview.png" />
      </div>
    `;
  }
}
