
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Employee, { EMPTY_EMPLOYEE } from 'src/app/models/Employee';
import Project from 'src/app/models/Project';
import TimeReport, { EMPTY_TIMEREPORT } from 'src/app/models/TimeReport';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';
import { TimereportService } from 'src/app/services/timereport.service';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.css']
})
export class AddreportComponent implements OnInit {
	@Input()
	edit:boolean = false;

	employees: Employee[]=[]
	projects: Project[]=[]
	eloaded:boolean=false;
	ploaded:boolean=false;

	constructor(
		private reportService:TimereportService,
		private employeeService: EmployeeService,
		private projectService: ProjectService,
		private router:Router
	){
		this.eloaded=false;
		this.ploaded=false;
	}

	onFocus() {
		this.projectService.fetchProjects().subscribe({complete:()=>{
			this.employees=this.employeeService.employees;
			this.eloaded=true;
		}});
		this.employeeService.fetchEmployees().subscribe({complete:()=>{
			this.projects=this.projectService.projects;
			this.ploaded=true;
		}});
	}

	ngOnInit(): void {
		this.onFocus()
	}

	newreportform: FormGroup= new FormGroup({
		"pname":new FormControl("", [Validators.required]),
		"ename":new FormControl("", [Validators.required]),
		"date":new FormControl("", [Validators.required]),
		"hours":new FormControl(1, [Validators.required, Validators.min(0)])
	});

	savereport(){
		let report:TimeReport = EMPTY_TIMEREPORT;
		let e:Employee = EMPTY_EMPLOYEE
		e.id=this.newreportform.get("ename")?.value
		report.employee=this.newreportform.get("ename")?.value
		let p:Project = EMPTY_EMPLOYEE
		p.id=this.newreportform.get("pname")?.value
		report.project=this.newreportform.get("pname")?.value
		report.date=this.newreportform.get("date")?.value
		report.hours=this.newreportform.get("hours")?.value
		this.reportService.addReport(report).subscribe({
			complete: ()=>{
				this.router.navigate(["/"])
			}
		})
	}
	reset(){
		this.newreportform.markAsUntouched()
		this.newreportform.reset()
		if(this.edit){
			// edit reset
		}
	}
}
