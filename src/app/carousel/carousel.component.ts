import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouseltrack') ul: ElementRef

  track: HTMLElement = null;
  currentSlide: HTMLElement = null;
  nextSlide: HTMLElement = null;
  // eventClicked = new EventEmitter();
  
  ngAfterViewInit(){
    this.getCurrentSlide();
    // this.nextSlide = this.currentSlide.next()
    this.track = this.ul.nativeElement as HTMLElement;
  }

  getCurrentSlide(){
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    let result: Array<HTMLElement> = slides.filter((slide) => {
      if(slide.classList.contains('current-slide')){
        return slide;
      }
    });
    this.currentSlide = result[0];
    if(this.currentSlide == slides[slides.length - 1]){
      this.nextSlide = slides[0] as HTMLElement;
    }else{
      this.nextSlide = this.currentSlide.nextSibling as HTMLElement;
    }
  }

  moveToSlide(){
    console.log(this.nextSlide.style.left)
    this.track.style.transform = `translateX(-${this.nextSlide.style.left})`
    this.currentSlide.classList.remove('current-slide');
    this.nextSlide.classList.add('current-slide');
    this.getCurrentSlide();
  }

  clickNext($event){
    $event.preventDefault();
    this.moveToSlide();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
