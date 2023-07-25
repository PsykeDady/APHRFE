import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, finalize } from 'rxjs';
import Employee from '../models/Employee';
import { API_EMPLOYEE_ADD, API_EMPLOYEE_DELETE, API_EMPLOYEE_EDIT, API_EMPLOYEE_LISTS } from '../constants/FetchUtils';
@Injectable()
export class EmployeeService {

	private _employees:Employee[] =[

	]

	public update: EventEmitter<void> = new EventEmitter<void>();

	constructor(private httpClient: HttpClient) { }

	public get employees () {return this._employees}

	fetchEmployees():Observable<Employee[]>{
		this._employees.length=0; // or pop
		return this.httpClient.get<Employee[]>(API_EMPLOYEE_LISTS).pipe(tap(v=>{
			console.log(v)
			this._employees.push(...v)
		}), finalize(()=>{this.update.emit()}))
	}

	addEmployee(e:Employee):Observable<void> {
		return this.httpClient.post<void>(API_EMPLOYEE_ADD, e).pipe(finalize(()=>{
			this.fetchEmployees().subscribe();
		}))
	}

	editEmployee(e:Employee):Observable<void> {
		return this.httpClient.put<void>(API_EMPLOYEE_EDIT, e).pipe(finalize(()=>{
			this.fetchEmployees().subscribe();
		}))
	}

	deleteEmployee(id:number):Observable<void> {
		return this.httpClient.delete<void>(API_EMPLOYEE_DELETE+`/${id}`).pipe(finalize(()=>{
			this.fetchEmployees().subscribe();
		}))
	}

	getEmployee(id:number):Observable<Employee> {
		return this.httpClient.get<Employee>(API_EMPLOYEE_DELETE+`/${id}`)
	}

}
