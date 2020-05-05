import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Agent {
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
interface Client {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  panelOpenState = false;
  
  agents: Agent[] = [
    {value: 'steak-0', viewValue: 'Chiranjiv'},
    {value: 'pizza-1', viewValue: 'Tanmay'},
    {value: 'tacos-2', viewValue: 'Chiranjiv'}
  ];
  inbounds: Inbound[] = [
    {value: 'steak-0', viewValue: 'Inbnnsnsnnsnsnsnnsnssnound'},
    {value: 'pizza-1', viewValue: 'Tanmay'},
    {value: 'tacos-2', viewValue: 'Chjiv'}
  ];
  outbounds: Outbound[] = [
    {value: 'steak-0', viewValue: 'Outbound'},
    {value: 'pizza-1', viewValue: 'Tanmay'},
    {value: 'tacos-2', viewValue: 'Chjiv'}
  ];
  clients: Client[] = [
    {value: 'steak-0', viewValue: 'Client 1'},
    {value: 'pizza-1', viewValue: 'Client 2'},
    {value: 'tacos-2', viewValue: 'Chjiv'}
  ];


  [x: string]: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  private selectedLink: string="None";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  
 

  constructor() { }

  ngOnInit() {
  }

}
