import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'

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
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class ProcessComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  private selectedLink: string="Inbound";        
  
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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
