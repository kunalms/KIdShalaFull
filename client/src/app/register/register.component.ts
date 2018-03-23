import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import {FlashMessagesService} from 'angular2-flash-messages';


import { ValidateService} from '../services/validate.service';

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

  	constructor(private validateService:ValidateService, private flashMessagesService:FlashMessagesService) { }

  	ngOnInit() {
  		this.selectToday();
  	}

  	selectToday() {
    	this.birthDate = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  	}

 	onRegisterSubmit(){

 		 const dateString = this.birthDate.year+"/"+this.birthDate.month+"/"+this.birthDate.day;
 		 console.log(dateString);
 		 const user ={
			full_name:this.name,
  	 		user_name:this.userName,
  	 		password:this.password,
		   	birthdate:dateString,
		   	gender:this.gender
	 	};

	 	if(!this.validateService.validateRegister(user)){
	 		this.flashMessagesService.show('please fill all the fields',{cssClass:'alert-danger',timeout:3000});
	 		return false;
	 	}
		
 	}

}
