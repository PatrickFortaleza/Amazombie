export class Testimonial {
  public text: string;
  public stars: number;
  public halfStars: number;
  public author: string;

constructor(text: string, stars: number, halfStars: number, author: string) {
    this.text = text;
    this.stars = stars;
    this.halfStars = halfStars;
    this.author = author;
  }
}