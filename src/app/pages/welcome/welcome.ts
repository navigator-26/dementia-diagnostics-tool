import { AfterViewInit, Component } from '@angular/core';
import { UserData } from '../../providers/user-data';
import { AnimationController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { QuestionerData } from '../../providers/questioner.service'
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomePage implements AfterViewInit {
  username: string;

  // constructor(public userData: UserData) {}
  
  
  constructor(public userData: UserData, private route: ActivatedRoute, public questionerData:QuestionerData) {}

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

  setQuestioner(type) {
    this.questionerData.selectedQuestioner = type;

  }
}
