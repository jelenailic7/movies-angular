import { Component } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MoviesService } from '../shared/service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

 searchTerm: string;

    constructor(private router: Router) {
    }

    public searchMovie()
    {
        this.router.navigate(['/movies']);
    }
}
