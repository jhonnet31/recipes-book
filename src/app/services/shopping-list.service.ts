import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 private ingredients:Ingredient[]=[new Ingredient("strawberry",3), new Ingredient("pineapple",10)];

 ingredientChanged=new Subject<Ingredient[]>();

  constructor() { }

  getIngredient(){
    return this.ingredients.slice();
  }

  
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  AddIngredients(ingredientsList:Ingredient[]){
    this.ingredients.push(...ingredientsList);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
