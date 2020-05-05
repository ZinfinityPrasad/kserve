import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  agent: number;
  calltype: string;
}

interface Process {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', agent: 1.0079, calltype: 'H', },
  {position: 2, name: 'Helium', agent: 4.0026, calltype: 'He'},
  {position: 3, name: 'Lithium', agent: 6.941, calltype: 'Li'},
  {position: 4, name: 'Beryllium', agent: 9.0122, calltype: 'Be'},
  {position: 5, name: 'Boron', agent: 10.811, calltype: 'B'},
  {position: 6, name: 'Carbon', agent: 12.0107, calltype: 'C'},
  {position: 7, name: 'Nitrogen', agent: 14.0067, calltype: 'N'},
  {position: 8, name: 'Oxygen', agent: 15.9994, calltype: 'O'},
  {position: 9, name: 'Fluorine', agent: 18.9984, calltype: 'F'},
  {position: 10, name: 'Neon', agent: 20.1797, calltype: 'Ne'},
];
@Component({
  selector: 'app-viewallagents',
  templateUrl: './viewallagents.component.html',
  styleUrls: ['./viewallagents.component.scss']
})
export class ViewallagentsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'agent', 'calltype'];
  dataSource = ELEMENT_DATA;

  
  process: Process[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

 

}
