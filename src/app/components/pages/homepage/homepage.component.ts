import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import TimeReport from 'src/app/models/TimeReport';
import { TimereportService } from 'src/app/services/timereport.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy{
	timereports: TimeReport[]=[]
	timereportupdate:Subscription|undefined = undefined
	
	constructor(private timereportService: TimereportService){
		this.timereportupdate= timereportService.update.subscribe( ()=>{
			this.timereports=timereportService.reports;
		})
	}

	ngOnInit(): void {
		this.timereportService.fetchReport().subscribe();
	}

	ngOnDestroy(): void {
		if(this.timereportupdate){ 
			this.timereportupdate.unsubscribe();
		}
	}
}
