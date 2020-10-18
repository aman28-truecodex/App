import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './components/reg/reg.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { MultiMenuComponent } from './multi-menu/multi-menu.component';
import { LikeDislikeComponent } from './likeDislike/like-dislike/like-dislike.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InactivePageComponent } from './inactive-page/inactive-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxjsSeriesComponent } from './rxjs-series/rxjs-series.component';
import { NgxTranslateComponent } from './ngx-translate/ngx-translate.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MemberComponent } from './memberDropdown/member.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegComponent},
  {path:'empdata',component:EmpDataComponent},
  {path:'member',component:MemberComponent},
  {path:'multimenu',component:MultiMenuComponent},
  {path:'likedislike',component:LikeDislikeComponent},
  {path:'login',component:LoginComponent},
  {path:'inactivepage',component:InactivePageComponent},
   {path:'dashboard',component:DashboardComponent},
  {path:'rxjsSeries',component:RxjsSeriesComponent},
  {path:'translate',component:NgxTranslateComponent},
  {path:'sidemenu', component:SideMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
