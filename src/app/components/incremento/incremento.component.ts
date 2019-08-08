import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styles: []
})
export class IncrementoComponent implements OnInit {

  percentage: number = 50;
  
  constructor() { }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.percentage += value;

    if (this.percentage >= 100) {
      this.percentage = 100;
    }
    if (this.percentage <= 0) {
      this.percentage = 0;
    }
  }

}
