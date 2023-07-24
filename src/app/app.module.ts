import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackdropComponent } from './components/floatingb/backdrop/backdrop.component';
import { FloatingbComponent } from './components/floatingb/floatingb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ReportComponent } from './components/pages/report/report.component';
import { ProjectComponent } from './components/pages/project/project.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { TimereportDetailComponent } from './components/pages/homepage/timereport-detail/timereport-detail.component';
import { TimereportService } from './services/timereport.service';
import { HttpClientModule } from '@angular/common/http';

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
    TimereportDetailComponent,
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
