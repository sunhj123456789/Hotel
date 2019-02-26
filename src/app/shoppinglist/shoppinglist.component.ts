import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/Ingredient.model';
import{ShoppingListService} from './shopping-list.service';



@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredient:Ingredient[];
  constructor( private ingService:ShoppingListService) { }
  ngOnInit() {
    this.ingredient=this.ingService.getIngredient();
    this.ingService.ingredientChange.subscribe((ing:Ingredient[])=>{
      this.ingredient=ing;
    })
  }

  
}
