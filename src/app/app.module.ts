import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackdropComponent } from './components/floatingb/backdrop/backdrop.component';
import { FloatingbComponent } from './components/floatingb/floatingb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProjectComponent } from './components/pages/project/project.component';
import { ReportComponent } from './components/pages/report/report.component';
import { TimereportService } from './services/timereport.service';
import { TimereportsTableComponent } from './components/pages/homepage/timereports-table/timereports-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FloatingbComponent,
    HomepageComponent,
    MenuComponent,
    BackdropComponent,
    ReportComponent,
    ProjectComponent,
    EmployeeComponent,
	TimereportsTableComponent
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
