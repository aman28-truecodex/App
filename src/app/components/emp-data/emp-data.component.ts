import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../../services/server-call.service'

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
  imgBasePath =''
  // timeStamp = new Date().getTime();
  constructor(private serverCall:ServerCallService) { 
    this.imgBasePath =this.serverCall.imageBaseUrl;
  }
  header =["Images","FirstName","Password","Email","MobileNo","Country"];
  keys = ["fName","pwd","email","mNo","country"];
  employee:any= [];
  ngOnInit() {
    this.fnGetEmpData();
  }

fnGetEmpData(){
  this.serverCall.fnSendGetReq('users/getEmpData')
  .subscribe((res:any)=>{
    if(res.length>0){
      this.employee = res;
      console.log(this.employee);
    }
  },
  ()=>{
    alert('something went wrong...')
  })
}
//from where you added .jpg go h
fnDelete(){
  let isOk = window.confirm('Are You sure you want ')
}


}
