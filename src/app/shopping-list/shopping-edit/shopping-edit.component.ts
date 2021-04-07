import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild("ingredient",{static:false}) ingredient:ElementRef;
  @ViewChild("amount",{static:false}) amount:ElementRef;

  @Output() newIngredient:EventEmitter<Ingredient>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  AddIngredient(){

    console.log("NUEVO");
        this.newIngredient.emit(new Ingredient(this.ingredient.nativeElement.value,this.amount.nativeElement.value));
  }
}
