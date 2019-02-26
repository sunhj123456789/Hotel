import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'project1';
  loadingList='Recipes';
    selectlist(data:any){    
    console.log(data);    
    this.loadingList=data;
  }
}
