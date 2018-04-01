import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';


import { ValidateService} from '../services/validate.service';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	now:Date = new Date();
	name:String;
	userName:String;
	password:String;
	confirmPassword:String;
	gender:String ='male';
	birthDate;


	maxDate:NgbDateStruct={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
	minDate:NgbDateStruct={year: this.now.getFullYear()-50, month:1, day: 1};

  	constructor(
  				private validateService:ValidateService, 
				private flashMessagesService:FlashMessagesService,
				private authService:AuthService,
				private router:Router			
			) { }

  	ngOnInit() {
  		this.selectToday();
  	}

  	selectToday() {
    	this.birthDate = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  	}

 	onRegisterSubmit(){

 		 const dateString = this.birthDate.year+"/"+this.birthDate.month+"/"+this.birthDate.day;
 		const user ={
			full_name:this.name,
  	 		user_name:this.userName,
  	 		password:this.password,
		   	birthdate:dateString,
		   	gender:this.gender,
		   	latitude:0,
		   	longitude:0
	 	};

	 	if(this.password!=this.confirmPassword){
	 		this.flashMessagesService.show('Password and Confirm Password do not match',{cssClass:'alert-danger',timeout:3000});
	 		return false;
	 	}

	 	if(!this.validateService.validateRegister(user)){
	 		this.flashMessagesService.show('Please fill all the fields.',{cssClass:'alert-danger',timeout:3000});
	 		return false;
	 	}

	 	this.authService.addUser(user).subscribe(response=>{
	 		if(response.success){
	 			this.flashMessagesService.show(response.msg,{cssClass:'alert-success',timeout:3000});
	 			this.router.navigate(['/login']);
	 		}else{
	 			this.flashMessagesService.show(response.msg,{cssClass:'alert-danger',timeout:3000});
	 			this.router.navigate(['/register']);
	 		}
	 	});


		
 	}

}
