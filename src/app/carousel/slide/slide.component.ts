import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef  } from '@angular/core';
import { Slide } from '../slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements AfterViewInit {
  sliders: Array<object> = [];
  slideWidth: number = 0;
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

  @ViewChildren('slide') components:QueryList<ElementRef>;

  ngAfterViewInit(){
    console.log(this.components.toArray());
    this.sliders=this.components.toArray();
    this.slideWidth = this.components.toArray()[0].nativeElement.getBoundingClientRect().width

    this.components.forEach((child, index) => {
      child.nativeElement.style.left = `${this.slideWidth * index}px`; 
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
