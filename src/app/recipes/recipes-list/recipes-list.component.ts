import { Component, OnInit } from '@angular/core';
import {ReceipeService} from '../receipe.service';
import{ Recipe} from '../recipe.modal';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[];

  constructor(private RecService:ReceipeService) { }

  ngOnInit() {
  
 this.recipes=this.RecService.getReceipe();
  }

}
