import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Employee from '../models/Employee';
import { API_EMPLOYEE_LISTS } from '../constants/FetchUtils';
@Injectable()
export class EmployeeService {

	private _employees:Employee[] =[

	]

	constructor(private httpClient: HttpClient) { }

	fetchEmployee():Observable<Employee>{
		this._employees.length=0; // or pop
		return this.httpClient.get<Employee>(API_EMPLOYEE_LISTS).pipe(tap(v=>{
			this._employees.push(v)
		}))
	}

}
