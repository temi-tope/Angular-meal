import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe 1', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe 2', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe 3', 'This is just a test', 'https://tse3.mm.bing.net/th?id=OIP.4suPi4X0P8OSQwSJ4KE5wQHaLH&pid=Api&P=0&w=300&h=300')

  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
