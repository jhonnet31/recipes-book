
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']

})
export class RecipesComponent implements OnInit, OnDestroy {

  subs:Subscription;

  recipe:Recipe;
  constructor(private recipeSrv:RecipeService) { }
  
  ngOnDestroy(): void {
   this.subs.unsubscribe();
  }

  ngOnInit() {
    this.recipeSrv.recipeSelected.subscribe(recipe=>{
      this.recipe=recipe;
    });
  }


}
