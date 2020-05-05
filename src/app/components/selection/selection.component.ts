import { Component, OnInit } from '@angular/core';

interface Process {
  value: string;
  viewValue: string;
}

interface Inbound {
  value: string;
  viewValue: string;
}
interface Outbound {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  processes: Process[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  inbounds: Inbound[] = [
    {value: 'steak-0', viewValue: 'Inbound'},
    {value: 'pizza-1', viewValue: 'Tanmay'},
    {value: 'tacos-2', viewValue: 'Chjiv'}
  ];
  outbounds: Outbound[] = [
    {value: 'steak-0', viewValue: 'Outbound'},
    {value: 'pizza-1', viewValue: 'Tanmay'},
    {value: 'tacos-2', viewValue: 'Chjiv'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
