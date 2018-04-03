import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

import { FileuploadService } from '../../services/fileupload.service';

@Component({
  selector: 'app-adminaddcategory',
  templateUrl: './adminaddcategory.component.html',
  styleUrls: ['./adminaddcategory.component.css']
})
export class AdminaddcategoryComponent implements OnInit {


	catName:String;
	description:String;

  	constructor(private fileuploadService:FileuploadService,
  			private flashMessagesService:FlashMessagesService,
      		private router:Router) { }

  	ngOnInit() {

  	}

  	onSubmit(){
  		this.fileuploadService.addCategory(this.catName,this.description).subscribe(data=>{
		if(data.success){
          console.log("success");
          this.flashMessagesService.show(data.msg,{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/adminhome']);
        }else{
          this.flashMessagesService.show(data.msg,{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['/adminhome']);
        	}
  		});
  	}
}
