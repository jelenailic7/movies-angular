import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../shared/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

public counter = 0;
private movies;
public selectedAll = false;
public selectedAny = false;


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
     this.movies = data;
    });
  }

  public onSelect(agreed:boolean){
    this.counter++;
  }
  public selectAll(){
    this.counter = this.movies.length;
  }
  public deselectAll(){
    this.counter = 0;
  }

}




