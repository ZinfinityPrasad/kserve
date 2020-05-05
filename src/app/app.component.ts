import { User } from './model/user';
import { DataSharingService } from './service/data-sharing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kserve';
  constructor(private share: DataSharingService){
    let user: User = JSON.parse(localStorage.getItem('user'));
    if(user != null || user != undefined){
        this.share.updateUser(user);      
    }else{
      this.share.logoutUser();
    }
  }
}
