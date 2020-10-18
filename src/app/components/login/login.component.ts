import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import{ServerCallService} from '../../services/server-call.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() isShowLogin 
loginForm :FormGroup
  constructor(private serverCall:ServerCallService,private fb:FormBuilder,private router:Router) { 
      this.loginForm = this.fb.group({
        email : [null,[Validators.required]],
        pwd : [null,[Validators.required]],
      })
  }

  ngOnInit() {
  }

  fnLogin(data){
    debugger;
    this.isShowLogin = false;
    this.serverCall.fnSendPostReq("users/empLogin",data)
    .subscribe((res:any)=>{
      console.log(res);
       if(res){
        let resData = res[0];
        console.log(resData);
        sessionStorage.emailId = resData.email;
        sessionStorage.pwd = resData.pwd;
       this.router.navigateByUrl('/likedislike');
      }
    },()=>{

    })
  }

}
