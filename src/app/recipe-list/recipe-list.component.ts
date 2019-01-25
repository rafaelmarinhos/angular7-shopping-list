import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test', 'Simple description', 'https://c1.staticflickr.com/6/5127/5263978082_01bbd0e746_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
