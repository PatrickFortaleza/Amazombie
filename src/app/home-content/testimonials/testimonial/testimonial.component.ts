import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials: Testimonial[] = [
    new Testimonial(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit perferendis mollitia dolores vero autem soluta!', 
      4,
      1,
      'John Doe'),
    new Testimonial(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit perferendis mollitia dolores vero autem soluta!', 
      4,
      1,
      'John Doe'),
    new Testimonial(
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit perferendis mollitia dolores vero autem soluta!', 
      4,
      1,
      'John Doe'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
