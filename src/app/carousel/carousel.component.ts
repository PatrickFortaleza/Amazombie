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
  allSlides: Array<HTMLElement>;
  
  ngAfterViewInit(){
    this.getCurrentSlide();
    this.track = this.ul.nativeElement as HTMLElement;
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children);
    this.allSlides = slides;
  }

  getCurrentSlide(){
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    let result: Array<HTMLElement> = slides.filter((slide) => {
      if(slide.classList.contains('current-slide')){
        return slide;
      }
    });
    this.currentSlide = result[0];
  }

  moveToSlide(track, current, next){
    track.style.transform = `translateX(-${this.nextSlide.style.left})`
    current.classList.remove('current-slide');
    next.classList.add('current-slide');
    this.getCurrentSlide();
  }

  clickPrev($event){
    $event.preventDefault();
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    this.getCurrentSlide();
    if(this.currentSlide == slides[0]){
      this.nextSlide = slides[slides.length - 1] as HTMLElement;
    }else{
      this.nextSlide = this.currentSlide.previousSibling as HTMLElement;
    }
    this.moveToSlide(this.track, this.currentSlide, this.nextSlide);
  }

  clickNext($event){
    $event.preventDefault();
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    this.getCurrentSlide();
    if(this.currentSlide == slides[slides.length - 1]){
      this.nextSlide = slides[0] as HTMLElement;
    }else{
      this.nextSlide = this.currentSlide.nextSibling as HTMLElement;
    }
    this.moveToSlide(this.track, this.currentSlide, this.nextSlide);
  }

  onResize($event){
    console.log('resizing');
    setTimeout(() => {
      this.setTrackPosition(this.currentSlide);
    }, 500)
  }

  setTrackPosition(slide){
    this.track.style.transform = `translateX(-${slide.style.left})`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
