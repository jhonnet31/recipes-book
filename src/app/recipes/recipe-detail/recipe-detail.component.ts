import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  @Input() recipeDetail:Recipe;
  constructor(private recipeSrv:RecipeService) { }

  ngOnInit() {

    console.log("DETALLE");
    console.log(this.recipeDetail);
    
    
  }

  

}
