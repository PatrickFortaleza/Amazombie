export class Product {
  public title: String;
  public subtitle: String;
  public price: number;
  public id: number;
  public quantity: number;
  public imagePath: String;
  public desc: String;
  public stars: number;
  public halfStars: number;

  constructor(title: String, subtitle: String, price: number, id: number, quantity: number, imagePath: String, desc: String, stars: number, halfStars: number){
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.id = id;
    this.quantity = quantity;
    this.imagePath = imagePath;
    this.desc = desc;
    this.stars = stars;
    this.halfStars = halfStars;
  }
}