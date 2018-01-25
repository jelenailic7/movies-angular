import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MovieRowComponent } from './shared/movie-row/movie-row.component';
import { SearchModule } from './search-module';
import { MoviesService } from './shared/service/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SearchModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
