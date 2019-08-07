import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

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
