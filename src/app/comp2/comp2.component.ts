import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

  list1:number[]=[]

  constructor(private _listService:ListService){
      this.list1=_listService.getlist();
  }

  addnumber(val:any){
     this._listService.addnum(val);
     this.list1=this._listService.getlist();

  }

}
