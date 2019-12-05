import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {

  }

}
