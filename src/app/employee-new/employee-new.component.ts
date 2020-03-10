import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Felipe Gonçalves';

  constructor() { 
      setTimeout(() => {
        this.name = 'Fetecno';
      }, 3000);
   }

  ngOnInit(): void {
  }

}
