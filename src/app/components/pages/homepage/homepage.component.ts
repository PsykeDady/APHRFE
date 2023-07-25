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
	timereportupdate:Subscription|undefined = undefined
	timereports: TimeReport[]=[]
	timereportsprojects: TimeReport[]=[]
	timereportspe: TimeReport[]=[]
	timereportsep: TimeReport[]=[]
	
	constructor(private timereportService: TimereportService){
		this.timereportupdate= timereportService.update.subscribe( ()=>{
			this.timereports=timereportService.reports;
			this.timereportService.getReportsGroupbyProject().subscribe({
				next: (value) => {
					this.timereportsprojects= value;
				},
			})
		})
	}

	ngOnInit(): void {
		this.timereportService.fetchReports().subscribe();
	}

	ngOnDestroy(): void {
		if(this.timereportupdate){ 
			this.timereportupdate.unsubscribe();
		}
	}
}
