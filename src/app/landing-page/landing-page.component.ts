import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private animationCtrl: AnimationController) { }
  
  ngOnInit() {
    this.playIntroAnimation();
  }

  playIntroAnimation() {
    const animation = this.animationCtrl.create()
      .addElement(document.querySelector('.landing-container'))
      .duration(1500)
      .fromTo('opacity', '0', '1');

    animation.play();
  }
}
