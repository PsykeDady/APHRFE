import { Component, Input, Type } from '@angular/core';
import { TableHeader } from 'src/app/models/TableHeader';
import TimeReport from 'src/app/models/TimeReport';

@Component({
  selector: 'app-timereports-table',
  templateUrl: './timereports-table.component.html',
  styleUrls: ['./timereports-table.component.css']
})
export class TimereportsTableComponent {
	PROJECT: TableHeader = TableHeader.PROJECT
	EMPLOYEE: TableHeader = TableHeader.EMPLOYEE
	DATE: TableHeader = TableHeader.DATE
	HOURS: TableHeader = TableHeader.HOURS
	TableHeader : typeof TableHeader = TableHeader

	@Input()
	timeReports:TimeReport[]=[];

	@Input()
	headers: TableHeader[] = [this.PROJECT,this.EMPLOYEE,this.DATE, this.HOURS]

	tdClass(name:TableHeader):string {
		return name===TableHeader.HOURS?'text-end':'text-start'
	}

	formatNumber(n:number):string{
		return n<10?'0'+n :''+n;
	}

	formatDate(date:Date){
		let year :number=date.getUTCFullYear()
		let month :number=date.getMonth()
		let day :number=date.getDate()

		let hours :number= date.getHours()
		let minute :number= date.getMinutes()

		return `${year}/${this.formatNumber(month)}/${this.formatNumber(day)} ${this.formatNumber(hours)}:${this.formatNumber(minute)}`
	}

	cellValue(name:TableHeader, timereport:TimeReport):string|Date|number {
		let value:string|Date|number=""

		switch(name) {
			case TableHeader.PROJECT	: value=timereport.project.name	 ; break;
			case TableHeader.EMPLOYEE	: value=timereport.employee.name ; break;
			case TableHeader.DATE		:
				let date:Date=new Date(timereport.date);
				value=this.formatDate(date)
			; break;
			default:
				value= timereport.hours;
		}

		return value;
	}
}
