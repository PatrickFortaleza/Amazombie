import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  cards: Card[] = [
    new Card(
      'SUBSCRIBE TO A CRATE', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum illo eveniet delectus earum tempore, totam rem illum quo quos fugit at iure et non rerum. Sint, quam.',
      '../../../../assets/icons/subscribe.svg',
      '01'),
    new Card(
      'RECEIVE CRATE', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate similique laborum illo eveniet delectus earum tempore.',
      '../../../../assets/icons/crate.svg',
      '02'),
    new Card(
      'SURVIVE EVERYTHING', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate similique eveniet delectus earum tempore, totam rem illum quo quos fugit at iure et non rerum. Sint, quam',
      '../../../../assets/icons/fire.svg',
      '03'),
  ]

  constructor(){}

  // transform(html) {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }
  ngOnInit(): void {
  }

}
