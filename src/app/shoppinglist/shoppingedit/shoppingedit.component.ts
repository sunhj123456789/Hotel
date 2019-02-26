import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import{Ingredient} from '../../shared/Ingredient.model';
import{ShoppingListService} from '../shopping-list.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

  @ViewChild('name')name:ElementRef;
  @ViewChild('amount')amount:ElementRef;
  

  constructor(private shplistservice:ShoppingListService) { }
 
  ngOnInit() {
  }

 AddItem() {
   //console.log(this.name.nativeElement.value);
   //console.log(this.amount.nativeElement.value);
   let name=this.name.nativeElement.value;
   let amount=this.amount.nativeElement.value;
   const newIngredient=new Ingredient(name,amount);
   this.shplistservice.addIngredient(newIngredient);     
 }

 clear(){
   this.name.nativeElement.value='';
   this.amount.nativeElement.value='';
 }
}
