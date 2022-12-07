import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movieForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)])
  })
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  search() {
    if (this.movieForm.valid) {
      this.movieService.setNewMovie(this.movieForm.get('title')?.value);
    }
  }

}
