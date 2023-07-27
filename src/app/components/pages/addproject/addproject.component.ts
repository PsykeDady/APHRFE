import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Project, { EMPTY_PROJECT } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
	@Input()
	edit:boolean = false;

	constructor(
		private projectService:ProjectService,
		private router:Router
	){}

	newprojectform: FormGroup= new FormGroup({
		"pname":new FormControl("", [Validators.required])
	});

	saveproject(){
		let project:Project = EMPTY_PROJECT;
		project.name=this.newprojectform.get("pname")?.value
		this.projectService.addProject(project).subscribe({
			complete: ()=>{
				this.router.navigate(["/projects"])
			}
		})
	}
	reset(){
		this.newprojectform.markAsUntouched()
		this.newprojectform.reset()
		if(this.edit){
			// edit reset
		}
	}
}
