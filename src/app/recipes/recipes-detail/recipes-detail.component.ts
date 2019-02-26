import { Component, OnInit,Input } from '@angular/core';
import{ReceipeService} from '../receipe.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recData:Recipe;

  constructor(private recService:ReceipeService ) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
  this.recService.addIngredientToshplist(this.recData.ingredient)

  }
}
