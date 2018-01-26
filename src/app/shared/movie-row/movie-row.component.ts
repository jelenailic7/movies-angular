import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent implements OnInit {

@Input() movieRow: Movie;
@Output() onSelect = new EventEmitter<boolean>();

private selected = false;

  constructor() { }

select(agreed:boolean){ 
  this.onSelect.emit(agreed);
    this.selected = true;

}
  ngOnInit() {
  }

}
