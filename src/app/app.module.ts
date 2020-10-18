import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegComponent } from './components/reg/reg.component';
import { HeaderComponent } from './components/header/header.component';
import { EmpDataComponent } from './components/emp-data/emp-data.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { MultiMenuComponent } from './multi-menu/multi-menu.component';
import { LikeDislikeComponent } from './likeDislike/like-dislike/like-dislike.component';
import { LoginComponent } from './components/login/login.component';
import { FileUploadModule} from 'ng2-file-upload';
import { InactivePageComponent } from './inactive-page/inactive-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxjsSeriesComponent } from './rxjs-series/rxjs-series.component';
import { NgxTranslateComponent } from './ngx-translate/ngx-translate.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MemberComponent } from './memberDropdown/member.component'

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    HeaderComponent,
    EmpDataComponent,
    HomeComponent,
    UpdateEmpComponent,
    MultiMenuComponent,
    LikeDislikeComponent,
    LoginComponent,
    InactivePageComponent,
    DashboardComponent,
    RxjsSeriesComponent,
    NgxTranslateComponent,
    SideMenuComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
