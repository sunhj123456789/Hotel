import{Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',   
})


export class HeaderComponent {
name="header";
@Output() featureselect=new EventEmitter<string>();
feature:string;
select(feature:string){
console.log(feature);
this.featureselect.emit(feature);

}
}