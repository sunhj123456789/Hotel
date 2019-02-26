import { Injectable, EventEmitter } from '@angular/core';
import{Ingredient} from '../shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange=new EventEmitter<Ingredient[]>();
  ingredient:Ingredient[]=[
    new Ingredient('apple',5),
    new Ingredient('orange',5)
  ];
  constructor() { }

  getIngredient(){
    return this.ingredient.slice();
  }

  addIngredient(ing:Ingredient){
    this.ingredient.push(ing);
    this.ingredientChange.emit(this.ingredient.slice());
  }
  addIngredients(ing:Ingredient[]){
    //console.log(ing);
    //for(let item of ing)
    //{
      //this.ingredient.push(item);
  //  }
  this.ingredient.push(...ing);
  this.ingredientChange.emit(this.ingredient.slice());

  }
}
