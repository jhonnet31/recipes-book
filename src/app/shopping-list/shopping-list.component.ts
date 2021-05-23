import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  ingredients:Ingredient[]
  constructor(private srvIngredient:ShoppingListService) { 

  }

  ngOnInit() {
    this.ingredients=this.srvIngredient.getIngredient();
    this.srvIngredient.ingredientChanged.subscribe(i=>this.ingredients=i);
  }

 


}
