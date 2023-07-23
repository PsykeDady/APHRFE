import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { ProjectComponent } from './components/pages/project/project.component';
import { ReportComponent } from './components/pages/report/report.component';

const routes: Routes = [
	{path:"", children:[
		{path:"", pathMatch:'full',component:HomepageComponent},
		{path:"employee",component:EmployeeComponent},
		{path:"project",component:ProjectComponent},
		{path:"report",component:ReportComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
