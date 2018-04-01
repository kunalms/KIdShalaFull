import { Component, OnInit } from '@angular/core';

import { FetchService } from '../../services/fetch.service';
import { Obj } from '../../models/object';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

	displayCategory:string[];
	allObjects:Obj[];
	selectedCategory:string;
	displayData:Obj[];
	selectedTab:number;

	allCount:number;
	pendingCount:number;
	approvedCount:number;
	rejectedCount:number;

  	constructor(private fetchService:FetchService) { 
  		this.selectedTab=2;
		this.fetchService.fetchAllObjects().subscribe(data=>{
			this.allObjects=data;
			this.displayData= this.allObjects.filter(this.ispending);
			this.allCount=this.allObjects.length;
			this.approvedCount= this.allObjects.filter(this.isapproved).length;
			this.pendingCount= this.allObjects.filter(this.ispending).length;
			this.rejectedCount= this.allObjects.filter(this.isrejected).length;
			
		});
		this.displayCategory=['All Requests','Approved Requests','Pending Requests','Rejected Object Request'];
		this.selectedCategory=this.displayCategory[this.selectedTab];

  	}

  	ngOnInit() {
  	}

  	ispending(obj:any){
		return obj.approve_status==0;
	}

	isapproved(obj:any){
		return obj.approve_status==1;
	}

	isrejected(obj:any){
		return obj.approve_status==2;
	}

	
	onclick(num:number){
		this.selectedTab=num;
		this.selectedCategory=this.displayCategory[this.selectedTab];
		if(num==0){
			this.displayData= this.allObjects;	
		}else if(num==1){
			this.displayData= this.allObjects.filter(this.isapproved);
		}else if(num==2){
			this.displayData= this.allObjects.filter(this.ispending);
		}else if(num==3){
			this.displayData= this.allObjects.filter(this.isrejected);
		}
	}


	isDataAvailable(){
		if(this.displayData != undefined){
			if(this.displayData.length>0){
				return true;
			}
			else{
				return false;
			}
		}
	}

}
