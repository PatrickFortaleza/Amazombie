import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SlideComponent } from './slide/slide.component';
import { interval, Subscription } from 'rxjs';
import { Slide } from './slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{
  // querySelect carouseltrack
  @ViewChild('carouseltrack') ul: ElementRef
  @ViewChild('carouselnav') div: ElementRef
  @ViewChild(SlideComponent) child;

  // Initiate state variables
  subscription: Subscription;
  track: HTMLElement = null;
  carouselnav: HTMLElement = null;
  slides: Slide [] = [];
  currentSlide: HTMLElement = null;
  nextSlide: HTMLElement = null;
  currentDot: HTMLElement = null;
  isHover: Boolean = false;

  ngOnInit(){
    const source = interval(4000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => {
      if(!this.isHover) {
        this.clickNext()
      }
    });
  }

  ngAfterViewInit(){
    this.getCurrentSlide();
    this.track = this.ul.nativeElement as HTMLElement;
    this.carouselnav = this.div.nativeElement as HTMLElement;
    this.slides = this.child.slides
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Sets the current slide object
  getCurrentSlide(){
    // Find all slides from track
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    // Find slide with class current-slide
    let result: Array<HTMLElement> = slides.filter((slide) => {
      if(slide.classList.contains('current-slide')){
        return slide;
      }
    });
    // Attach result to currentSlide state variable
    this.currentSlide = result[0];
  }


  getCurrentDot(){
    let dots: Array<HTMLElement> = Array.from(this.div.nativeElement.children)
    let result: Array<HTMLElement> = dots.filter((dot) => {
      if(dot.classList.contains('current-slide')){
        return dot;
      }
    });
    this.currentDot = result[0];
  }

  // Moves slide left or right
  moveToSlide(track, current, next){
    // based on the next slide, translate the track to the correct position
    track.style.transform = `translateX(-${next.style.left})`
    // Remove current slide class from current slide
    current.classList.remove('current-slide');
    // The next slide becomes the current-slide
    next.classList.add('current-slide');
    // Save the next and current class in state
    this.getCurrentSlide();
  }

  clickPrev($event){
    if ($event){$event.preventDefault();}
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    let dots: Array<HTMLElement> = Array.from(this.div.nativeElement.children)
    this.getCurrentSlide();
    if(this.currentSlide == slides[0]){
      this.nextSlide = slides[slides.length - 1] as HTMLElement;
    }else{
      this.nextSlide = this.currentSlide.previousSibling as HTMLElement;
    }
    this.getCurrentDot();
    let nextDot = this.currentDot.previousSibling;
    if (nextDot === null) nextDot = dots[slides.length-1] 

    this.updateDots(this.currentDot, nextDot);
    this.moveToSlide(this.track, this.currentSlide, this.nextSlide);
  }

  clickNext(){
    // if ($event){$event.preventDefault();}
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    let dots: Array<HTMLElement> = Array.from(this.div.nativeElement.children)
    this.getCurrentSlide();
    if(this.currentSlide == slides[slides.length - 1]){
      this.nextSlide = slides[0] as HTMLElement;
    }else{
      this.nextSlide = this.currentSlide.nextSibling as HTMLElement;
    }
    this.getCurrentDot();
    let nextDot = this.currentDot.nextSibling;
    if (this.currentDot === dots[slides.length - 1]) nextDot = dots[0]

    this.updateDots(this.currentDot, nextDot);
    this.moveToSlide(this.track, this.currentSlide, this.nextSlide);
  }

  navClick($event){
    let targetDot: HTMLElement = $event.target.closest('button')
    if(!targetDot) return null;
    let slides: Array<HTMLElement> = Array.from(this.ul.nativeElement.children[0].children)
    let dots: Array<HTMLElement> = Array.from(this.div.nativeElement.children)
    let result: Array<HTMLElement> = dots.filter((dot) => {
      if(dot.classList.contains('current-slide')){
        return dot;
      }
    });
    this.currentDot = result[0];

    let targetIndex = dots.findIndex(dot => dot == targetDot);
    let targetSlide: HTMLElement = slides[targetIndex];
    this.updateDots(this.currentDot, targetDot);
    this.moveToSlide(this.track, this.currentSlide, targetSlide);
  }

  updateDots(currentDot, targetDot){
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide')
  }

  hoverOn(){
    this.isHover = true;
  }

  hoverOff(){
    this.isHover = false;
  }

  // detect windor resizing and reposition track
  onResize(){
    console.log('resizing');
    setTimeout(() => {
      this.setTrackPosition(this.currentSlide);
    }, 500)
  }

  // sets track position - for responsivensss
  setTrackPosition(slide){
    this.track.style.transform = `translateX(-${slide.style.left})`;
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
