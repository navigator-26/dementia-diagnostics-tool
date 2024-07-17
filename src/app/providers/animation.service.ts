import { Injectable } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) {}

  async animateAndNavigate(buttonElement: HTMLElement, targetPage: string) {
    buttonElement.setAttribute('disabled', 'true'); // Disable button to prevent multiple clicks
    const buttonAnimation = this.animationCtrl.create()
      .addElement(buttonElement)
      .duration(500)
      .fromTo('opacity', '1', '0.5');

      await buttonAnimation.play();

      buttonElement.removeAttribute('disabled'); 

    //     buttonAnimation.play().then(() => {
    //   this.navCtrl.navigateForward(targetPage, {
    //     animated: true,
    //     animation: this.pageTransitionAnimation()
    //   });
    // });

    await this.navCtrl.navigateForward(targetPage, {
        animated: true,
        animation: this.pageTransitionAnimation()
      });


  }

  pageTransitionAnimation() {
    return (baseEl: HTMLElement, opts?: any) => {
      const animation = this.animationCtrl.create()
        .addElement(baseEl)
        .duration(500)
        .fromTo('opacity', '0', '1');

      return animation;
    };
  }
}
