import { Component, OnInit,Input } from '@angular/core';
import{ReceipeService} from './../../receipe.service';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recdata:Recipe;
  constructor( private recService:ReceipeService ) { }

  ngOnInit() {
    console.log(this.recdata);
  }

  onSelected(){
    this.recService.selectRecipe.emit(this.recdata);
  }

}
