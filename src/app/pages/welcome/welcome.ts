import { AfterViewInit, Component } from '@angular/core';
import { UserData } from '../../providers/user-data';
import { AnimationController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomePage implements AfterViewInit {
  username: string;

  constructor(public userData: UserData, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username');
    // console.log(this.username);
  }


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
