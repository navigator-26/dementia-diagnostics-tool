import { AfterViewInit, Component } from '@angular/core';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomePage implements AfterViewInit {
  username: string;

  constructor(public userData: UserData) {}
  
  
  ngAfterViewInit() {
    this.getUsername();
  }
  
  ionViewDidEnter() {

  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }
}
