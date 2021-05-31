import { BaseComponent } from '../../../../utils/base-component';
import { config } from '../../../../_config/index';

import './register-upload.scss';

export class RegisterUpload extends BaseComponent {
  getImg: (image: string) => void = () => {};
  private image: string;
  private createImage: HTMLImageElement;

  constructor() {
    super('div', ['form__image']);
    this.image = config.ANONYMOUS_IMAGE;

    const input = new BaseComponent('input', ['form__input-upload']);
    input.element.setAttribute('id', 'imageUpload');
    input.element.setAttribute('type', 'file');
    input.element.addEventListener('change', (e) => this.uploadFile(e));

    const label = new BaseComponent('label');
    label.element.setAttribute('for', 'imageUpload');

    const preview = new BaseComponent('div', ['form__image-preview']);

    this.createImage = new Image();
    this.createImage.src = this.image;
    preview.element.append(this.createImage);

    this.element.append(input.element, label.element, preview.element);
  }

  private uploadFile(event: Event) {
    const element = event.target as HTMLInputElement;

    if (element.files) {
      const file = element.files[0];
      const FileRead = new FileReader();

      FileRead.readAsDataURL(file);

      FileRead.onload = () => {
        if (FileRead.result !== null) {
          this.image = String(FileRead.result);
        }

        this.render();
        this.getImg(this.image);
      };
    }
  }

  render(): void {
    this.createImage.src = this.image;
    this.createImage.width = 165;
    this.createImage.height = 165;
  }
}
