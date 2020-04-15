import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  title = 'Arquitectura de una aplicación en Angular - NG Panamá';
  constructor() { }

  ngOnInit(): void {
  }

}
