import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  subs:Subscription;
  
  ingredients:Ingredient[]
  constructor(private srvIngredient:ShoppingListService) { 

  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.ingredients=this.srvIngredient.getIngredient();
    this.subs= this.srvIngredient.ingredientChanged.subscribe(i=>this.ingredients=i);
  }

 


}
