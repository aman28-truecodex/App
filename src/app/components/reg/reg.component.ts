import { Component, OnInit } from '@angular/core';
import { ServerCallService } from '../../services/server-call.service';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import{FileSelectDirective,FileUploader} from 'ng2-file-upload'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  cityArr :any=null ;
  regForm :FormGroup;
  dataObj = {
    fName:'',
    pwd :'',
    mNo : '',
    email : '',
    dob : '',
    country: '',
    state: '',
    pSkils : ''
  }
  countryArr: any;
  stateArr: any;
  skillsArr : any =[
    {
      "key":"Communication",
      "value" : "Communication",
      "name" :"s1"
    },
    {
      "key":"Decision Making",
      "value" : "Decision Making",
      "name" :"s2"
    },
    {
      "key":"Work Under pressure",
      "value" : "Work Under pressure",
      "name" :"s3"
    },
    {
      "key":"Time Management",
      "value" : "Time Management",
      "name" :"s4"
    },
    {
      "key":"Self-Motivation",
      "value" : "Self-Motivation",
      "name" :"s5"
    },
    {
      "key":"Conflict Resolution",
      "value" : "Conflict Resolution",
      "name" :"s6"
    },
    {
      "key":"Leadership",
      "value" : "Leadership",
      "name" :"s7"
    },
    {
      "key":"Adaptibility",
      "value" : "Adaptibility",
      "name" :"s8"
    },
  ];

  public uploader :FileUploader;

  constructor(private serverCall: ServerCallService, private router: Router, public fb : FormBuilder) { 
   this.uploader = new FileUploader({url:this.serverCall.baseUrl+'users/upload',itemAlias:'photo'})
   
    this.regForm = this.fb.group({
     fName : [null,[Validators.required]],
     pwd : [null,[Validators.required]],
     email : [null,[Validators.required]],
     mNo : [null,[]],
     dob : [null,[]],
     country : [null,[]],
     state : [null,[]],
     pSkills : [null,[]],
     image : [null,[]]
   });
  }

  fnRegister(data) {
    this.dataObj.fName=data.fName;
    this.dataObj.pwd=data.pwd;
    this.dataObj.email=data.email;
    this.dataObj.mNo=data.mNo;
    this.dataObj.dob=data.dob;
    this.dataObj.country=data.country;
    this.dataObj.state=data.state;
    this.dataObj.pSkils=data.pskils;
    // this.dataObj.state.push(V.statename )

    let fileQueInfo = this.uploader.queue;
    console.log(fileQueInfo);
    if(!fileQueInfo.length){
      alert("Please select Image");
      return;
    }
    let file = fileQueInfo[0].file;
    this.serverCall.fnSendPostReq("users/empReg",this.dataObj)
      .subscribe((res: any) => {
        if (res && res.insertedCount > 0){
          file.name=res.insertedId + '.jpg';         
           this.uploader.uploadAll();  
         
           fileQueInfo.pop();
          this.router.navigateByUrl('empdata');
        }
      },
      //i have make webpage  tube u want see?? yes y not ok 
      //done; yeah below image implement like only not dislike.ok ha okay
        (res: any) => {
          alert("Something went wrong...")
        })
  }
  ngOnInit() {
    this.fnGetCountry();
    //cors issue setting for file uplaoder
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false; 
     };
  }
  fnGetCity(){
    this.serverCall.fnSendGetReq("users/getCity")
    .subscribe((res:any)=>{
      this.cityArr = res;
    },
    ()=>{

    })
  }
  fnGetCountry() {
    this.serverCall.fnSendGetReq("users/getCountry")
      .subscribe((res: any) => {
        this.countryArr = res;
      }, () => {
        alert("Something went wrong...")
      })
  }
  fnGetState(event) {
console.log("Country changed")
    console.log(event.target.value)
    var obj = {
      _cId: event.target.value
    }
    console.log(obj);
    this.serverCall.fnSendPostReq('users/getState', obj)
      .subscribe((res: any) => {
        console.log(res);
        this.stateArr = res
      }, () => {
        alert("Something went wrong...")
      })
  }
  fnSelectSkills(){;
 
    console.log("selected")
  }
 
 



}


