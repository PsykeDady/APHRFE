import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
	
	private _employeeService:Employee[] =[

	]
	
	constructor(private httpClient: HttpClient) { }

	
	
}