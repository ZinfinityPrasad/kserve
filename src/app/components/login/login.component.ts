import { DataSharingService } from './../../service/data-sharing.service';
import { User } from './../../model/user';
import { FireService } from './../../service/fire-service.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private db: FireService, 
    private snackbar: MatSnackBar,
    private router: Router,
    private share: DataSharingService) { }

  ngOnInit() {
  }

  login(username, password){    
    this.db.getCollectionWithCondition('user', 'username', '==', username).subscribe(
      (data:User[]) =>{
      if(data.length > 0 ){
        let user = data[0]
        if(user.password === password){
          this.snackbar.open('user logged in successfully', 'close', {duration:2000});
          this.share.updateUser(user);
          this.router.navigate(['process']);
        }
      } else{        
        this.snackbar.open('wrong username/password', 'close', {duration:2000});
      }
    }, err =>{
      this.snackbar.open('wrong username/password', 'close', {duration:2000});
    })
  }
}
