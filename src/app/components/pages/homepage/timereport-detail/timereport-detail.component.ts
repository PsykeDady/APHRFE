import { Component, Input } from '@angular/core';
import TimeReport, { EMPTY_TIMEREPORT } from 'src/app/models/TimeReport';

@Component({
  selector: 'app-timereport-detail',
  templateUrl: './timereport-detail.component.html',
  styleUrls: ['./timereport-detail.component.css']
})
export class TimereportDetailComponent {

	@Input()
	timereport:TimeReport = EMPTY_TIMEREPORT; 

	constructor(){
		console.log(this.timereport)
	}
}
