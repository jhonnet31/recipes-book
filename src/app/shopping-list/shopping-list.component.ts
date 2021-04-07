import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients=[new Ingredient("strawberry",3), new Ingredient("pineapple",10)];

  constructor() { }

  ngOnInit() {
  }

  AddIngredient(ingredient:Ingredient){
    console.log(ingredient);
      this.ingredients.push(ingredient);
  }


}
