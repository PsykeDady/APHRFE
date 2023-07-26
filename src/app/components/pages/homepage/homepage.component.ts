import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import TimeReport from 'src/app/models/TimeReport';
import { TimereportService } from 'src/app/services/timereport.service';

import { TableHeader } from 'src/app/models/TableHeader';
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

	PROJECT: TableHeader = TableHeader.PROJECT
	EMPLOYEE: TableHeader = TableHeader.EMPLOYEE
	DATE: TableHeader = TableHeader.DATE
	HOURS: TableHeader = TableHeader.HOURS

	constructor(private timereportService: TimereportService){
		this.timereportupdate= timereportService.update.subscribe( ()=>{
			this.timereports=timereportService.reports;
			this.timereportService.getReportsGroupbyProject().subscribe({
				next: (value) => {
					this.timereportsprojects= value;
				},
			})
			this.timereportService.getReportsGroupbyProjectEmployee().subscribe({
				next: (value) => {
					this.timereportspe= value;
				},
			})
			this.timereportService.getReportsGroupbyEmployeeProject().subscribe({
				next: (value) => {
					this.timereportsep= value;
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
