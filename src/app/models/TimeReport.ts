import Employee, { EMPTY_EMPLOYEE } from "./Employee";
import Project, { EMPTY_PROJECT } from "./Project";

export default class TimeReport {
	constructor(
		public employee:Employee,
		public project:Project, 
		public date:Date,
		public hours:number
		)
	{}
}

export const EMPTY_TIMEREPORT=new TimeReport(EMPTY_EMPLOYEE,EMPTY_PROJECT,new Date(),-1);