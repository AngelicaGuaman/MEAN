import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styles: []
})
export class IncrementoComponent implements OnInit {

  @Input('title') leyend: string = '';
  @Input() percentage: number = 50;

  @Output() changeValueEvent: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

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

    if (this.percentage > 100) {
      this.percentage = 100;
    } else if (this.percentage < 0) {
      this.percentage = 0;
    }
    console.log('Percentage incrementador', this.percentage);
    this.changeValueEvent.emit(this.percentage);
    this.txtProgress.nativeElement.focus();
  }

  changeValueInput(newValue: number) {
    this.percentage = newValue;

    if (this.percentage > 100) {
      this.percentage = 100;
    } else if (this.percentage < 0 || this.percentage == undefined) {
      this.percentage = 0;
    }

    this.txtProgress.nativeElement.value = this.percentage;
    console.log('Percentage input value', this.percentage);
    this.changeValueEvent.emit(this.percentage);
  }
}
