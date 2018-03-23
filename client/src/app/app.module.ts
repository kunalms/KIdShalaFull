import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';


import { FlashMessagesModule } from 'angular2-flash-messages';

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
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
