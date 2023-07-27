import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

	projects: Project[] = []
	subscription :Subscription|undefined = undefined

	constructor(private projectService:ProjectService, private router:Router){
		this.subscription= this.projectService.update.subscribe(()=>{
			this.projects=this.projectService.projects
		})
	}

	ngOnInit(): void {
		this.projectService.fetchProjects().subscribe()
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe()
	}

	onDelete(id:number){
		this.projectService.deleteProject(id).subscribe()
	}
	onEdit(e:Project){
		this.router.navigate(["/addproject"])
	}
}
