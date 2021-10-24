import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.shopify.com/s/files/1/0740/4097/articles/Recipes_600_X_600_1944x.jpg?v=1614401981'),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.shopify.com/s/files/1/0740/4097/articles/Recipes_600_X_600_1944x.jpg?v=1614401981'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
