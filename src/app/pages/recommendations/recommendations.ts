import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';
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


  current = 50;
  max = 50;
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

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
