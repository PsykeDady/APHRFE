import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackdropComponent } from './components/floatingb/backdrop/backdrop.component';
import { FloatingbComponent } from './components/floatingb/floatingb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { TimereportsTableComponent } from './components/pages/homepage/timereports-table/timereports-table.component';
import { TimereportService } from './services/timereport.service';
import { EmployeersComponent } from './components/pages/employeers/employeers.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AddprojectComponent } from './components/pages/addproject/addproject.component';
import { AddemployeeComponent } from './components/pages/addemployee/addemployee.component';
import { AddreportComponent } from './components/pages/addreport/addreport.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FloatingbComponent,
    HomepageComponent,
    MenuComponent,
    BackdropComponent,
	TimereportsTableComponent,
	EmployeersComponent,
	ProjectsComponent,
	AddprojectComponent,
	AddemployeeComponent,
	AddreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [
	TimereportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
