import { Component, OnInit } from '@angular/core';
import { iEmply } from 'src/assets/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Datatable';

  dtOptions : DataTables.Settings = {};
  constructor(){}
  public array:iEmply[]=[
  {id:'1', name:'aman', role:'admin'},
  {id:'2', name:'vinay', role:'admin'},
  {id:'3', name:'vimal', role:'admin'},
  {id:'4', name:'Tab', role:'admin'},
  {id:'5', name:'volume', role:'admin'},
  

]
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    };
}
}
