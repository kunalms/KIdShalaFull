import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

import { AuthService } from '../services/auth.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	userName:String;
	password:String;

	dataFromServer;

  	constructor(private authService:AuthService,
  				private router:Router,
  				private flashMessage:FlashMessagesService
  			) { }

	ngOnInit() {
  	}


  	onLoginSubmit(){
  		const user={
  			user_name:this.userName,
  			password:this.password
  		}

  		this.authService.authenticateUser(user).subscribe(data=>{
  			if(data.success){
  				this.authService.storeUserData(data.user._id,data.user);
  				this.flashMessage.show(data.msg,{cssClass:'alert-success',timeout:3000});
  				this.router.navigate(['/dashboard']);
  			}else{
  				this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
	 			this.router.navigate(['/login']);
  			}
  		});
  	}

}
