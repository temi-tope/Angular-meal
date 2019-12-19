import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()

export class DataStorageSevice {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://recipebook-31c18.firebaseio.com/recipes.json?auth=' + token,
    this.recipeService.getRecipes());
  }

  getRecipes()  {
    const token = this.authService.getToken();
    // this.http.get<Recipe[]>('https://recipebook-31c18.firebaseio.com/recipes.json')
    this.httpClient.get<Recipe[]>
    ('https://recipebook-31c18.firebaseio.com/recipes.json?auth=' + token)
    .pipe( map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            console.log(recipe);
            recipe.ingredients = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes) => {
          this.recipeService.setRecipes(recipes);
        }
    );
  }
}

