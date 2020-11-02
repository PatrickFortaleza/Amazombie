export class OneProduct {
  public title: string;
  public subtitle: string;
  public desc: string;
  public stars: number;
  public halfStars: number;
  public price: number;
  public id: number;
  public imagePath : string;

constructor(title: string, subtitle: string, desc: string, stars: number, halfStars: number, price: number, id: number, imagePath: string) {
  this.title = title;
  this.subtitle = subtitle;
  this.desc = desc;
  this.stars = stars;
  this.halfStars = halfStars;
  this.price = price;
  this.id = id;
  this.imagePath = imagePath;
}
}