import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkTutorialGuard } from './providers/check-tutorial.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
  // },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canMatch: [checkTutorialGuard]
  },
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule),
    canMatch: [checkTutorialGuard]
  },
  {
    path: 'personalized',
    loadChildren: () => import('./personalized/personalized.module').then(m => m.PersonalizedModule),
    canMatch: [checkTutorialGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
