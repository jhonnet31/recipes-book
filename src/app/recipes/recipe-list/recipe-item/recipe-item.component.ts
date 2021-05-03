import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipe:Recipe;
@Output() selectedRecipe= new EventEmitter<void>();

  constructor(private serviceRecipe:RecipeService) { }

  ngOnInit() {
  }

  selected(){
    this.serviceRecipe.recipeSelected.emit(this.recipe);
  }
}
