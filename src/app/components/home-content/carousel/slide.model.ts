export class Slide {
    public title: string;
    public subtitle: string;
    public desc: string;
    public imagePath: string;
    public destLink: string;
    public linkText: string;
    public id: string;

constructor(title: string, subtitle: string, desc: string, imagePath: string, destLink: string, linkText: string, id: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.desc = desc;
    this.imagePath = imagePath;
    this.destLink = destLink;
    this.linkText = linkText;
    this.id = id;
  }
}