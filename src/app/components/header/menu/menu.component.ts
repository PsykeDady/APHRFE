import { Component } from '@angular/core';
import {Output, OnInit} from "@angular/core"
import {EventEmitter} from "@angular/core"
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	wider:boolean=false;

	@Output()
	close:EventEmitter<void> = new EventEmitter<void>();

	ngOnInit(): void {
		let timeout=setTimeout(()=>{this.wider=true;clearTimeout(timeout)}, 300)
	}

	buttons:{label:string,link:string}[]=[
		{label:"Reports", link:"/"},
		{label:"Employees", link:"/employees"},
		{label:"Projects", link:"/projects"}
	]

	flagClose(){
		this.wider=false
		let timeout= setTimeout(()=>{this.close.emit(); clearTimeout(timeout)}, 300)
	}
}
