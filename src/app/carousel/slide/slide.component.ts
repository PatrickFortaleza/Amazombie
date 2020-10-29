import { Component, OnInit } from '@angular/core';
import { Slide } from '../slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  slides: Slide[] = [
    new Slide(
      'Conquer', 
      'the undead. With style.', 
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime reiciendis voluptatum praesentium sit earum consequatur, quia quam provident omnis soluta?',
      '/assets/images/carousel-slide-1.png',
      '#',
      'See subscriptions'),
      new Slide(
      'Fight Zombies', 
      'Without losing your kill streak.', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempore ducimus aut? Voluptatibus, architecto aut aperiam officiis harum assumenda ullam?',
      '/assets/images/carousel-slide-2.png',
      '#',
      'Subscribe Now'),
      new Slide(
        'Protect Eachother', 
        'But most importantly, our freedom.', 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates enim, ullam soluta omnis distinctio, deserunt esse porro adipisci nihil sunt error!',
        '/assets/images/carousel-slide-3.png',
        '#',
        'Find out how'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
