import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuActive: boolean = false;

  onToggle(menuActive: boolean): void {
    this.menuActive = menuActive
  }
  constructor() { }

  ngOnInit(): void {
  }

}
