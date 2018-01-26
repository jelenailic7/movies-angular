import { Injectable } from '@angular/core';
import { movieList } from '../example/example';
import { Movie } from '../models/movie';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MoviesService {

private movieList: Movie [];

  constructor() {
    this.movieList = movieList.map(movie => {
      return new Movie(movie);
      });
   }

 public getMovies()
  {
      return new Observable((o: Observer<any>)=> {
       o.next(movieList);
       return o.complete();
      });
  //  return Observable.of(this.movieList);   
  }
 public searchMovie(term) {
   let movies = [];
   movies = this.movieList.filter((movie: Movie) => {
     movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
   });

 }
  


}
