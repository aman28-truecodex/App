import { Component, OnInit } from '@angular/core';
import {ServerCallService} from '../../services/server-call.service'
@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  imgArray:any=[];
imgBasePath =''  
constructor(private serverCall : ServerCallService) { 
  this.imgBasePath =this.serverCall.imageBaseUrl;
}
ngOnInit() {
  this.fnGetEmpData();
}
fnGetEmpData(){
  
  this.serverCall.fnSendGetReq('users/getEmpData')
  .subscribe((res:any)=>{
    if(res.length>0){
      this.imgArray = res;
      console.log(this.imgArray);
    }
  },
  ()=>{
    alert('something went wrong...')
  })
}
fnLiked(imgObj){
 let fName = imgObj.fName;
 console.log(fName);
  let email = imgObj.email;
  console.log(email)

    var dataObj ={
      liked : 0,
      fName : fName,
      email : email,
  }

  // this.serverCall.fnSendPostReq("")

 }
}
