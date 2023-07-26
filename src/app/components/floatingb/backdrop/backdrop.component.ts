import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent  implements OnInit, OnDestroy {

	@Output()
	closeEvent:EventEmitter<void> = new EventEmitter<void>()

	ngOnInit() {
		let el: HTMLElement|null = document.getElementsByTagName("body")[0]
		if(el)el.style["overflow"]="hidden"
	}

	ngOnDestroy(): void {
		let el: HTMLElement|null = document.getElementsByTagName("body")[0]
		if(el)el.style["overflow"]="auto"
	}

	backdropClick(){
		this.closeEvent.emit();
	}
}
