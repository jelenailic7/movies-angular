import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent  {
 searchName: string;

    constructor(private router: Router)
    {}

    searchMovie(){
      this.router.navigate(['/movies']);
    }
}