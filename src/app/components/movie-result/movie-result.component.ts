import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.scss']
})
export class MovieResultComponent implements OnInit {

  movie$ = this.moviesService.currentMovie$;

  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {

  }

}
