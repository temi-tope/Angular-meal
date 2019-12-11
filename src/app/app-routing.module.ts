import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
{path: '', redirectTo: '/recipes', pathMatch: 'full'},
{path: 'recipes', component: RecipesComponent},
{path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
