import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/pages/addemployee/addemployee.component';
import { AddprojectComponent } from './components/pages/addproject/addproject.component';
import { AddreportComponent } from './components/pages/addreport/addreport.component';
import { EmployeersComponent } from './components/pages/employeers/employeers.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const routes: Routes = [
	{path:"", children:[
		{path:"", pathMatch:'full',component:HomepageComponent},
		{path:"employees", pathMatch:'full',component:EmployeersComponent},
		{path:"projects", pathMatch:'full',component:ProjectsComponent},
		{path:"addemployee", pathMatch:'full',component:AddemployeeComponent},
		{path:"addproject", pathMatch:'full',component:AddprojectComponent},
		{path:"addreport", pathMatch:'full',component:AddreportComponent},
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
