import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail:Recipe;


  constructor(
     private router:ActivatedRoute,
     private route:Router,
     private recipeSrv:RecipeService,
     private shoppingSrv:ShoppingListService,
     ) { }

  ngOnInit() {

    console.log("DETALLE");
    console.log(this.recipeDetail);
    this.router.params.subscribe(p=>{
       this.recipeDetail= this.recipeSrv.getRecipe(p["id"]);
    });

    
    
  }


  AddIngredients(){
    this.shoppingSrv.AddIngredients(this.recipeDetail.ingredients);
  }

  
  OnRecipeEdit(){
     this.route.navigate(["edit"],{relativeTo:this.router});
  }
}
