import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendationsPage } from './recommendations';

const routes: Routes = [
  {
    path: '',
    component: RecommendationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsPagePageRoutingModule { }
