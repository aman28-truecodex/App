import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../services/server-call.service'
import {FormGroup,FormControl,FormArray,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-multi-menu',
  templateUrl: './multi-menu.component.html',
  styleUrls: ['./multi-menu.component.css']
})
export class MultiMenuComponent implements OnInit {
  menuForm : FormGroup;
  countryName;
  stateName;
  cityName;
constructor(private serverCall : ServerCallService,private fb:FormBuilder) {
  this.menuForm = this.fb.group({
    cName :[''  ],
    sName :[''],
    cityName :[''],
  })
}

  ngOnInit() {
    this.fnGetCountry();
  }
  countryArr:any = '';
  stateArr : any = '';
  cityArr : any ='';

  fnGetCountry(){
   
    this.serverCall.fnSendGetReq('users/getCountry')
    .subscribe((res:any)=>{
      if(res){
        this.countryArr = res;
      }else{
        alert("No data found")
      }
    },
    ()=>{
      alert("Something went wrong....")
    }
    )
   }
   fnGetState(event){
    
    var dataObj ={
      cId : event.target.id
    }
    this.serverCall.fnSendPostReq('users/getState', dataObj)
      .subscribe((res: any) => {
         if(res){
          this.stateArr = res
        }
      }, 
      () => {alert("Something went wrong...")}
     )
   }
   fnGetCity(event){
    
    var dataObj ={
      sId : event.target.id
    }
    this.serverCall.fnSendPostReq('users/getCity', dataObj)
      .subscribe((res: any) => {
           
        this.cityArr = res
      }, () => {
        alert("Something went wrong...")
      })
   }

   fnGetData(data){
    // this.countryName = this.menuForm.get('cName').value;
    // console.log(this.menuForm.controls)
    this.stateName = this.menuForm.get('sName').value;
    this.cityName = this.menuForm.get('cityName').value;
    // console.log("Country:"+this.countryName+","+"State:"+","+this.stateName+"City:"+this.cityName)
    console.log(data)
   }
  }
