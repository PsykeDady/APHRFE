export default class Employee {
	constructor(public id:number, public name:string) {
		
	}
}

export const EMPTY_EMPLOYEE = new Employee(-1,"")