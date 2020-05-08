import { DataSharingService } from './../../service/data-sharing.service';
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

  radios: string[] =['inbound', 'outbound']
  processlist: Process[] = [];
  processsource = new BehaviorSubject(this.processlist);
  processes= this.processsource.asObservable();
  selectedRad: string
  selectedProcess: any

  constructor(private db: FireService,
    private snackbar: MatSnackBar,
    private router: Router,
    private share: DataSharingService) { }

  ngOnInit() {
    this.db.getCollection('process').subscribe((data: Process[]) =>{
      if(data.length >0){
          this.processsource.next(data);
      }
    });
  } 

  processChanged(value: any){
    this.selectedProcess = value;
  } 

  radChanged(value: any){
    this.selectedRad = value;    
  }

  navigate(){
    let type = this.selectedRad;
    let process = this.selectedProcess;    
    this.share.process_agent_data = {processname: process.name, 
      processcode: process.code, type: type};
    this.router.navigate(['agents']);
  }
  
}
