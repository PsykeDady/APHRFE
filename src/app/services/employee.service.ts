import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class EmployeeService {

	private _employees:Employee[] =[

	]

	constructor(private httpClient: HttpClient) { }

	fetchEmployee():Observable<Employee>{
		this._employees.length=0; // or pop
		return this.httpClient.get<Employee>("http://localhost:8080/aphr/employee").pipe(tap(v=>{
			this._employees.push(v)
		}))
	}

}
