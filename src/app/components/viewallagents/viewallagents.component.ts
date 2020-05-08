import { SpinnerService } from './../../common/spinner.service';
import { User } from './../../model/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataSharingService } from './../../service/data-sharing.service';
import { FireService } from './../../service/fire-service.service';
import { Process } from './../../model/process';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSpinner } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  agent: number;
  calltype: string;
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
  displayedColumns: string[] = ['name', 'email', 'process', 'calltype','audit'];
  dataSource = new MatTableDataSource<User>();

  
  process: Process[] = [];
  currentProcess: Process = {};
  currentCallType: string;
  agentdummylist: User[] =[]
  agentSource = new BehaviorSubject(this.agentdummylist);
  agentList = this.agentSource.asObservable();
  types =['inbound', 'outbound'];
  selectedprocess: Process;
  selectedtype: string;
  processForm = new FormControl();

  constructor(private db: FireService,
    private share: DataSharingService,
    private snackbar: MatSnackBar,
    private router: Router, 
    private sprinner: SpinnerService) {
      console.log(share.process_agent_data);
      this.db.getCollection('process').subscribe(data =>{
        this.process = data;
        if(share.process_agent_data != null || share.process_agent_data != undefined){
          this.currentProcess.code = share.process_agent_data.processcode;
          this.currentProcess.name = share.process_agent_data.processname;
          this.currentCallType = share.process_agent_data.type;
          console.log('*****',this.currentCallType, this.currentProcess);
          data.forEach((tt: Process) =>{
            if(tt.code === this.currentProcess.code){
              this.selectedprocess = tt;
            }
          });
          this.selectedtype = this.currentCallType;
          this.getAgentsByProcessAndCallType(this.currentProcess.code, this.currentCallType);  

        }else{
          this.selectedprocess = this.process[0];
          this.selectedtype = 'inbound';
          this.getAgentsByProcessAndCallType(this.process[0].code, this.selectedtype);  
        }
      })

    }

  ngOnInit() {

  }

  getAgentsByProcessAndCallType(process: string, type: string){
    let ref = this.sprinner.open();
    this.db.getCollectionWithCondition('user', 'processes', 'array-contains', process).subscribe((data: User[]) =>{
      let filtered  = data.filter(x=>x.callTypes.includes(type));
      this.agentSource.next(filtered);
      this.dataSource = new MatTableDataSource(filtered);
      ref.close();
    });
  }

  navigateToEval(agent: User, process: Process, type: string){

  }
  
}
