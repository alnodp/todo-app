export class HeaderModel {
  title: string;
  description: string;
  showBackBtn: boolean;
  imagePath?: string;

  constructor(title: string, description: string, showBackBtn: boolean, imagePath?: string) {
    this.title = title;
    this.description = description;
    this.showBackBtn = showBackBtn;
    this.imagePath = imagePath;
  }
}
