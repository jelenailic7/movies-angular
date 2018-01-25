import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './service/movies.service';



@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule
    ],
    providers: [ MoviesService ]

  })

  export class SharedModule {}