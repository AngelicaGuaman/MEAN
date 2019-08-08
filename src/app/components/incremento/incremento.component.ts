import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styles: []
})
export class IncrementoComponent implements OnInit {

  @Input('title') leyend: string = '';
  @Input() percentage: number = 50;

  @Output() changeValueEvent: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyend);
    console.log('Percentage', this.percentage);
  }

  ngOnInit() {
    console.log('Leyenda', this.leyend);
    console.log('Percentage', this.percentage);
  }

  changeValue(value: number) {
    this.percentage += value;

    if (this.percentage >= 100) {
      this.percentage = 100;
    }
    if (this.percentage <= 0) {
      this.percentage = 0;
    }

    this.changeValueEvent.emit(this.percentage);
  }
}
