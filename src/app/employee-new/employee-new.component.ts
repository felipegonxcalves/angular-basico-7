import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Felipe Gonçalves';
  employees = [];

  constructor() { 
      setTimeout(() => {
        this.name = 'Fetecno';
      }, 3000);
   }

  ngOnInit(): void {
  }

  addEmployee(event) {
    console.log(event);
    this.employees.push(this.name);
    console.log(this.employees);
  }

}
