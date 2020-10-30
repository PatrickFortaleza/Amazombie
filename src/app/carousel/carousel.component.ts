import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouseltrack') ul: ElementRef

  track: object = {};
  // eventClicked = new EventEmitter();
  
  ngAfterViewInit(){
    console.log(this.ul.nativeElement)
    this.track = this.ul.nativeElement
  }
  constructor() { }

  ngOnInit(): void {
  }

}
