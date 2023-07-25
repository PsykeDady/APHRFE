import { Component, Input } from '@angular/core';
import TimeReport from 'src/app/models/TimeReport';

@Component({
  selector: 'app-timereports-table',
  templateUrl: './timereports-table.component.html',
  styleUrls: ['./timereports-table.component.css']
})
export class TimereportsTableComponent {

	@Input()
	timeReports:TimeReport[]=[]; 

	@Input()
	headers:
		{
			project:boolean,
			employee:boolean,
			date:boolean,
			hours:boolean
		} = {
			project:true,
			employee:true,
			date:true,
			hours:true
		}
	
}
