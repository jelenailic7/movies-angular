import { Component, Injector } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { MoviesService } from '../../shared/service/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent  {

 private moviesService: MoviesService;

    constructor(private injector: Injector) {
        this.moviesService = this.injector.get(MoviesService)
    }

 
}
