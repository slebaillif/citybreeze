import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentMenuHeaders = ['About us', 'How it works', 'Login/Register'];
  selectedManu = 'Login/Register';

  constructor() { }

  ngOnInit(): void {
  }

}
