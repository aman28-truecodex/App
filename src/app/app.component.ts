import { Component } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  isShowLoginBtn :boolean = true;
  constructor(private router :Router){}
  fnLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
    this.isShowLoginBtn =false;
  }
}
