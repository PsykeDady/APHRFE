export default class Project {
	constructor(public id:number, public name:string) {
		
	}
}


export const EMPTY_PROJECT = new Project(-1,"")