import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Pepper', 300),
    new Ingredient('Apple', 5),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  // onAddIngredient(name: string, amount: number) {
  //   this.ingredients.push({name, amount});
  //   // const ingName = this.nameInputRef.nativeElement.value;
  //   // const ingAmount = this.amountInputRef.nativeElement.value;
  //   // const newIngredient = new Ingredient(ingName, ingAmount);
  //   // tslint:disable-next-line: no-unused-expression
  //   // this.ingredientAdded.emit(newIngredient);
  // }
}
