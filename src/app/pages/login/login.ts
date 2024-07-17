import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { AnimationService } from '../../providers/animation.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private animationService: AnimationService
  ) { }

  // onLogin(form: NgForm) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.userData.login(this.login.username);
  //     // this.router.navigateByUrl(`/app/tabs/landing/${this.login.username}`);
  //     this.router.navigateByUrl(`/app/tabs/welcome`);
  //     //this.router.navigateByUrl(`/landing`);

  //     //this.router.navigateByUrl(`/app/tabs/welcome`);
  //   }
  // }

  openWelcomePage() {
    this.router.navigateByUrl(`/app/tabs/welcome`);
  }

  // openWelcomePage(event: Event) {
  //   const buttonElement = event.target as HTMLElement;
  //   this.animationService.animateAndNavigate(buttonElement, '/app/tabs/welcome');
  // }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
