import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html'
})
export class MovieRowComponent implements OnInit {

@Input() movieRow: Movie;
@Output() onSelect = new EventEmitter<boolean>();
@Input() selected : boolean;
@Input() selectedAll: boolean;

  constructor() { }

public select(agreed:boolean){ 
  this.onSelect.emit(agreed);
    this.selected = true;
}

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.selectedAll){
      this.selected = true;
    } else {
      if(!this.selectedAll){
        this.selected = false;

      }
    }
  }

}

//parent moze da menja stanje u child komponenti?
