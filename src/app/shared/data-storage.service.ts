import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable()

export class DataStorageSevice {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.httpClient.put('https://recipebook-31c18.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
  }

  getRecipes()  {
    // this.http.get<Recipe[]>('https://recipebook-31c18.firebaseio.com/recipes.json')
    this.httpClient.get<Recipe[]>
    ('https://recipebook-31c18.firebaseio.com/recipes.json',
    {
      observe: 'body'
    })
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

