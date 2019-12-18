import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // // tslint:disable-next-line: max-line-length
    // new Recipe('Tasty Schnitzel',
    // 'A super-tasty Schnitzel - just awesome!',
    // // tslint:disable-next-line: max-line-length
    // 'https://tse4.mm.bing.net/th?id=OIP.a4CmMOUsklNgIztGnsS8AwAAAA&pid=Api&P=0&w=300&h=300',
    // [
    //   new Ingredient('Meat', 1),
    //   new Ingredient('French Fries', 20)
    // ]),
    // // tslint:disable-next-line: max-line-length
    // new Recipe('Big Fat Burger',
    // 'What else do you need to say?',
    // 'https://tse4.mm.bing.net/th?id=OIP.6yDer7WUK9PBIqioYgAFfAAAAA&pid=Api&P=0&w=300&h=300',
    // [
    //   new Ingredient('Buns', 2),
    //   new Ingredient('Meat', 1)
    // ]),
    // // tslint:disable-next-line: max-line-length
    // new Recipe('Delicious Shawama',
    // 'Its all you need to have!',
    // 'https://tse1.mm.bing.net/th?id=OIP._C91mLE7LB7nShRFJywDvwAAAA&pid=Api&P=0&w=175&h=1320',
    // [
    //   new Ingredient('Chicken', 3),
    //   new Ingredient('Cabbage', 15)
    // ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);

    }

   addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
   }

   updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
