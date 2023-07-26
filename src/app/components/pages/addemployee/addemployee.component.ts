import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY_EMPLOYEE } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

	@Input()
	edit:boolean = false;

	constructor(
		private employeeService:EmployeeService,
		private router:Router
	){}

	newemployeeform: FormGroup= new FormGroup({
		"ename":new FormControl("", [Validators.required])
	});

	saveemployee(){
		let employee = EMPTY_EMPLOYEE;
		employee.name=this.newemployeeform.get("ename")?.value
		this.employeeService.addEmployee(employee).subscribe({
			complete: ()=>{
				this.router.navigate(["/employees"])
			}
		})
	}
	reset(){
		this.newemployeeform.markAsUntouched()
		this.newemployeeform.reset()
		if(this.edit){
			// edit reset
		}
	}
}
