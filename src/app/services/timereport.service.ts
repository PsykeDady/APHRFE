import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import TimeReport from '../models/TimeReport';
import { API_REPORT_LISTS } from '../constants/FetchUtils';

@Injectable()
export class TimereportService {

	private _reports:TimeReport[] =[

	]

	public update:EventEmitter<void>=new EventEmitter<void>();

	constructor(private httpClient: HttpClient) { }

	fetchReport():Observable<TimeReport[]>{
		this._reports.length=0; // or pop
		return this.httpClient.get<TimeReport[]>(API_REPORT_LISTS).pipe(tap(v=>{
			console.log(v)
			this._reports.push(...v)
		}), finalize(()=>{this.update.emit()}))
	}

	public get reports (){return this._reports;}

}
