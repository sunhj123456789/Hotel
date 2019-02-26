import { Injectable, EventEmitter } from '@angular/core';
import {Recipe}from './recipe.modal';
import { Ingredient } from '../shared/Ingredient.model';
import{ShoppingListService} from '../shoppinglist/shopping-list.service';
@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  
 selectRecipe=new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('test','test','http://mruanova.com/img/1.jpg',
       [new Ingredient('meat',20),
       new Ingredient('bans',10)     
      ]   
    ),
    new Recipe('test','test','http://mruanova.com/img/1.jpg',
    [ new Ingredient('banana',10),
      new Ingredient('rice',10) 
    ] 
    )
        ];
    
  constructor(private sls:ShoppingListService) { }

  getReceipe(){ 
    return this.recipes.slice();
  }

  addIngredientToshplist(ing:Ingredient[]){
  //console.log(ing);
  this.sls.addIngredients(ing)
  }

}
