import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('Tasty Schnitzel',
    'A super-tasty Schnitzel - just awesome!',
    // tslint:disable-next-line: max-line-length
    'https://tse4.mm.bing.net/th?id=OIP.a4CmMOUsklNgIztGnsS8AwAAAA&pid=Api&P=0&w=300&h=300',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    // tslint:disable-next-line: max-line-length
    new Recipe('Big Fat Burger',
    'What else do you need to say?',
    'https://tse4.mm.bing.net/th?id=OIP.6yDer7WUK9PBIqioYgAFfAAAAA&pid=Api&P=0&w=300&h=300',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
    // tslint:disable-next-line: max-line-length
    new Recipe('Delicious Shawama',
    'Its all you need to have!',
    'https://tse1.mm.bing.net/th?id=OIP._C91mLE7LB7nShRFJywDvwAAAA&pid=Api&P=0&w=175&h=1320',
    [
      new Ingredient('Chicken', 3),
      new Ingredient('Cabbage', 15)
    ])

  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
