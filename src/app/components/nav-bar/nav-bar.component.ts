import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  public loggedIn = false;

  constructor() {}

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
