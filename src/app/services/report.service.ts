import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ReportService {

	private _reports:Report[] =[

	]

	constructor(private httpClient: HttpClient) { }

	fetchReport():Observable<Report>{
		this._reports.length=0; // or pop
		return this.httpClient.get<Report>("http://localhost:8080/aphr/report").pipe(tap(v=>{
			this._reports.push(v)
		}))
	}

}
