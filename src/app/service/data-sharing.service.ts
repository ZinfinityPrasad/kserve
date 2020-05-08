import { FireService } from './fire-service.service';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(private db: FireService) { }


  user: User = {}
  userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();

  updateUser(user: User){
    this.userSource.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logoutUser(){
    this.userSource.next(null);
    localStorage.clear();
  }

  public process_agent_data: any;
  public eval_data: any;
}
