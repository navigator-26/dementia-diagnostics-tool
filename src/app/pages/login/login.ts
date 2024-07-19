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

  openWelcomePage() {
    this.router.navigateByUrl(`/app/tabs/welcome`);
  // this.router.navigateByUrl(`/app/tabs/recommendations`);

  }


  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
