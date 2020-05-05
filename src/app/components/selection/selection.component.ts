import { Observable, BehaviorSubject } from 'rxjs';
import { Process } from './../../model/process';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FireService } from './../../service/fire-service.service';
import { Component, OnInit } from '@angular/core';

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
  processsource = new BehaviorSubject({});
  processes= this.processsource.asObservable();

  constructor(private db: FireService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.db.getCollection('process').subscribe((data: Process[]) =>{
      if(data.length >0){
          this.processsource.next(data);
      }
    });
  } 
  
}
