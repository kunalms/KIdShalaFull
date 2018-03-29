import { Component, OnInit } from '@angular/core';

import { FetchService } from '../services/fetch.service';
import { Obj } from '../models/object';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	displayCategory:string[];
	userObjectsAll:Obj[];
	selectedCategory:string;
	displayData:Obj[];
	selectedTab:number;

	allCount:number;
	pendingCount:number;
	approvedCount:number;
	rejectedCount:number;

	constructor(private fetchService:FetchService) { }

	ngOnInit() {
		this.selectedTab=0;
		this.fetchService.fetchObjects(localStorage.getItem('user_id')).subscribe(data=>{
			this.userObjectsAll=data;
			this.displayData=this.userObjectsAll;
			this.allCount=this.userObjectsAll.length;
			this.approvedCount= this.userObjectsAll.filter(this.isapproved).length;
			this.pendingCount= this.userObjectsAll.filter(this.ispending).length;
			this.rejectedCount= this.userObjectsAll.filter(this.isrejected).length;
		});
		this.displayCategory=['All Requests','Approved Requests','Pending Requests','Rejected Object Request'];
		this.selectedCategory=this.displayCategory[this.selectedTab];


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
			this.displayData= this.userObjectsAll;	
		}else if(num==1){
			this.displayData= this.userObjectsAll.filter(this.isapproved);
		}else if(num==2){
			this.displayData= this.userObjectsAll.filter(this.ispending);
		}else if(num==3){
			this.displayData= this.userObjectsAll.filter(this.isrejected);
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
