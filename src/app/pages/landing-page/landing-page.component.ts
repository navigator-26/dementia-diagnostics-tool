// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AnimationController } from '@ionic/angular';

// @Component({
//   selector: 'app-landing-page',
//   templateUrl: './landing-page.component.html',
//   styleUrl: './landing-page.component.css'
// })
// export class LandingPageComponent {
//   username: string;

//   constructor(private animationCtrl: AnimationController, private route: ActivatedRoute) { }
  
//   ngOnInit() {
//     this.playIntroAnimation();
//     this.username = this.route.snapshot.paramMap.get('username');
//     console.log(this.username);
//   }

//   playIntroAnimation() {
//     const animation = this.animationCtrl.create()
//       .addElement(document.querySelector('.landing-container'))
//       .duration(1500)
//       .fromTo('opacity', '0', '1');

//     animation.play();
//   }
// }
