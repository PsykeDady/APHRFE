import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Project from '../models/Project';
import { Observable, finalize, tap } from 'rxjs';
import { API_PROJECT_ADD, API_PROJECT_EDIT, API_PROJECT_GET, API_PROJECT_LISTS, API_REPORT_DELETE } from '../constants/FetchUtils';

@Injectable()
export class ProjectService {
	private _projects:Project[] =[

	]

	public update: EventEmitter<void> = new EventEmitter<void>();
	constructor

	(private httpClient: HttpClient) { }

	public get projects () {return this._projects}

	fetchProjects():Observable<Project[]>{
		this._projects.length=0; // or pop
		return this.httpClient.get<Project[]>(API_PROJECT_LISTS).pipe(tap(v=>{
			console.log(v)
			this._projects.push(...v)
		}), finalize(()=>{this.update.emit()}))
	}

	addProject(p:Project):Observable<void> {
		return this.httpClient.post<void>(API_PROJECT_ADD, p).pipe(finalize(()=>{
			this.fetchProjects().subscribe();
		}))
	}

	editProject(p:Project):Observable<void> {
		return this.httpClient.put<void>(API_PROJECT_EDIT, p).pipe(finalize(()=>{
			this.fetchProjects().subscribe();
		}))
	}

	deleteProject(id:number):Observable<void> {
		return this.httpClient.delete<void>(API_REPORT_DELETE+`/${id}`).pipe(finalize(()=>{
			this.fetchProjects().subscribe();
		}))
	}

	getProject(id:number):Observable<Project> {
		return this.httpClient.get<Project>(API_PROJECT_GET+`/${id}`)
	}

}
