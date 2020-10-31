export class Card {
  public title: string;
  public description: string;
  public svgCode: string;
  public id: string;

constructor(title: string, description: string, svgCode: string, id: string) {
    this.title = title;
    this.description = description;
    this.svgCode = svgCode;
    this.id = id;
  }
}