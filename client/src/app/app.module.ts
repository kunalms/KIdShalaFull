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
import { FetchService } from './services/fetch.service';

import { AuthGuard } from './guards/auth.guard';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './profile/profile.component';
import { AddObjectComponent } from './add-object/add-object.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AdminaddcategoryComponent } from './admin/adminaddcategory/adminaddcategory.component';
import { DashboarditemComponent } from './admin/dashboarditem/dashboarditem.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

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
  },{
    path:'addcategory',component:AdminaddcategoryComponent
  },{
    path:'admin',component:AdmindashboardComponent
  },{
    path:'adminhome',component:AdminhomeComponent
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
    AddObjectComponent,
    DashboardItemComponent,
    AdmindashboardComponent,
    AdminnavComponent,
    AdminaddcategoryComponent,
    DashboarditemComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService,AuthService,FileuploadService,FetchService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
