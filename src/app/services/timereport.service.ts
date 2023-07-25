import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { API_REPORT_ADD, API_REPORT_DELETE, API_REPORT_EDIT, API_REPORT_GET, API_REPORT_GROUPBY_EMPLOYEEPROJECT, API_REPORT_GROUPBY_PROJECT, API_REPORT_GROUPBY_PROJECTEMPLOYEE, API_REPORT_LISTS } from '../constants/FetchUtils';
import TimeReport from '../models/TimeReport';

@Injectable()
export class TimereportService {

	private _reports:TimeReport[] =[

	]

	public update:EventEmitter<void>=new EventEmitter<void>();

	constructor(private httpClient: HttpClient) { }

	public get reports (){return this._reports;}

	fetchReports():Observable<TimeReport[]>{
		this._reports.length=0; // or pop
		return this.httpClient.get<TimeReport[]>(API_REPORT_LISTS).pipe(tap(v=>{
			console.log(v)
			this._reports.push(...v)
		}), finalize(()=>{this.update.emit()}))
	}

	addReport(e:TimeReport):Observable<void> {
		return this.httpClient.post<void>(API_REPORT_ADD, e).pipe(finalize(()=>{
			this.fetchReports().subscribe();
		}))
	}

	editReport(e:TimeReport):Observable<void> {
		return this.httpClient.put<void>(API_REPORT_EDIT, e).pipe(finalize(()=>{
			this.fetchReports().subscribe();
		}))
	}

	deleteReport(id:number):Observable<void> {
		return this.httpClient.delete<void>(API_REPORT_DELETE+`/${id}`).pipe(finalize(()=>{
			this.fetchReports().subscribe();
		}))
	}

	getReport(id:number):Observable<TimeReport> {
		return this.httpClient.get<TimeReport>(API_REPORT_GET+`/${id}`)
	}

	getReportsGroupbyProject():Observable<TimeReport[]> {
		return this.httpClient.get<TimeReport[]>(API_REPORT_GROUPBY_PROJECT)
	}

	getReportsGroupbyProjectEmployee():Observable<TimeReport[]> {
		return this.httpClient.get<TimeReport[]>(API_REPORT_GROUPBY_PROJECTEMPLOYEE)
	}

	getReportsGroupbyEmployeeProject():Observable<TimeReport[]> {
		return this.httpClient.get<TimeReport[]>(API_REPORT_GROUPBY_EMPLOYEEPROJECT)
	}


}
