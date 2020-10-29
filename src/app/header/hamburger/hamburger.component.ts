import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  menuActive: boolean = false;
  // eventClicked = new EventEmitter();

  @Output() toggleMenu = new EventEmitter<boolean>();

  onClick($event){
    $event.preventDefault();
    this.menuActive = !this.menuActive
    this.toggleMenu.emit(this.menuActive);
  }
  // onClick(event: Event): void {
  //   this.eventClicked.emit(event);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
