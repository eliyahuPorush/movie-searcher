import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, filter, take, tap} from "rxjs";
import {Movie} from "../models/movie.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  currentMovie = new BehaviorSubject<Movie | null>(null);
  currentMovie$ = this.currentMovie.asObservable();

  constructor(private httpService: HttpClient) { }

  setNewMovie(title: string): void {
    this.httpService.get<Movie>(environment.baseSearchUrl, {params: {
        apiKey: environment.apiKey,
        t: title
      }}).pipe(
        filter(movie => {
          if(movie.hasOwnProperty('Error')) {
            alert('No movie found!')
            return false;
          }
          return true;
        }),
        tap(movie => this.currentMovie.next(movie)),
        take(1)
    ).subscribe()
  }
}
