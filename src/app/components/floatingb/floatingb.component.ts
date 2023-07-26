import { Component } from '@angular/core';

@Component({
  selector: 'app-floatingb',
  templateUrl: './floatingb.component.html',
  styleUrls: ['./floatingb.component.css']
})
export class FloatingbComponent {
	menu:boolean = true;

	flagMenu() {
		this.menu=!this.menu;
	}
}
