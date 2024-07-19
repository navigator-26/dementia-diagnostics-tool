import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';

import { QuestionerData } from '../../providers/questioner.service';
@Component({
  selector: 'page-recommendations',
  templateUrl: 'recommendations.html',
  styleUrls: ['./recommendations.scss'],
})
export class RecommendationsPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  max = 30;
  stroke = 15;
  radius = 125;
  semicircle = true;
  rounded = false;
  responsive = false;
  clockwise = true;
  color = '#45ccce';
  background = '#eaeaea';
  duration = 800;
  animation = 'easeOutCubic';
  animationDelay = 0;
  animations = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
  gradient = false;
  realCurrent = 0;

  recommendations:any = [];
  score: any = 0;

  recommendationArray = {
    "recommendation": {
      "high": [
        "Medications as suggested by your doctor",
        "therapies",
        "clinical Trials- to manage this condition.",
        "lifestyle and home Remedies - Enhance communication, encourage exercise,engage in activity"
      ],
      "medium": [
        "Cognitively stimulating the activities (eg reading,games)",
        "Physical exercise( e.g. aerobic and anaerobic",
        "Social interactions with others (e.g family events)",
        "Healthy diet such as the Mediterranean diet( e.g high in green leafy vegetables)",
        "Adequate sleep(eg uninterrupted sleep and with sufficient number of hours)",
        "Psychological health(e.g participating in personally meaningful activities such as playing music)"
      ],
      "no_impact":[
        

"Physical exercise",
"Healthy Diet",
"Adequate sleep."
      ]
    }
  }


  constructor(public popoverCtrl: PopoverController, public questionerData: QuestionerData) { }

  

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }


  ionViewDidEnter() {
  this.getFinalScore();
  }


  getFinalScore() {
    if(this.questionerData.selectedQuestioner === 'Standardized') {
      this.score = this.questionerData.standardizeFinalScore.Score_Z;
    } else {
      this.score = this.questionerData.finalScore;
    }
  }

  getRecommenedTest() {
    return this.questionerData.selectedQuestioner === 'Standardized' ? 'Personalized' : "Standardized";
  }

}
