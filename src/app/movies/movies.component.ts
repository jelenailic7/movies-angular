import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../shared/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

private movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
     this.movies = data;
    });
    
  }

}




