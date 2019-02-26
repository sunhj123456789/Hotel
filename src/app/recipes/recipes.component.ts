import { Component, OnInit } from '@angular/core';
import {ReceipeService} from '../recipes/receipe.service';
import {Recipe} from '../recipes/recipe.modal';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;
  constructor(private receipe:ReceipeService) { }

  ngOnInit() {
    this.receipe.selectRecipe.subscribe((rec:Recipe)=>{
      this.selectedRecipe=rec;
    })
  }


}
