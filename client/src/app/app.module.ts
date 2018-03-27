import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';



import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FileuploadService } from './services/fileupload.service';
import { FetchcategoryService } from './services/fetchcategory.service';

import { AuthGuard } from './guards/auth.guard';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './profile/profile.component';
import { AddObjectComponent } from './add-object/add-object.component';

const appRoutes:Routes=[
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home', component:HomeComponent
  },{
    path:'login',component:LoginComponent
  },{
    path:'register',component:RegisterComponent
  },{
    path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]
  },{
    path:'profile',component:ProfileComponent, canActivate:[AuthGuard]
  },{
    path:'addobject',component:AddObjectComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AddObjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService,AuthService,FileuploadService,FetchcategoryService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
