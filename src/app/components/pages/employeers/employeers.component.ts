import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Employee from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employeers',
  templateUrl: './employeers.component.html',
  styleUrls: ['./employeers.component.css']
})
export class EmployeersComponent implements OnInit, OnDestroy {

	employees: Employee[] = []
	subscription :Subscription|undefined = undefined

	constructor(private employeeService:EmployeeService, private router:Router){
		this.subscription= this.employeeService.update.subscribe(()=>{
			this.employees=this.employeeService.employees
		})
	}

	ngOnInit(): void {
		this.employeeService.fetchEmployees().subscribe()
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe()
	}

	onDelete(id:number){
		this.employeeService.deleteEmployee(id).subscribe()
	}
	onEdit(e:Employee){
		this.router.navigate(["/addemployee"])
	}
}
