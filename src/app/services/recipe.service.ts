import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

   recipeSelected:EventEmitter<Recipe>= new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe("RECETA UNO","DESCRIPCION","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"),
    new Recipe("RECETA DOS","DESCRIPCION DOS","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"),
    new Recipe("RECETA TRES","DESCRIPCION TRES","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563")


  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
