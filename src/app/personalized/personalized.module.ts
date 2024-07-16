import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PersonalizedComponent } from './personalized.component';
import { PersonalizedRoutingModule } from './personalized-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PersonalizedRoutingModule
  ],
  declarations: [PersonalizedComponent],
})
export class PersonalizedModule {}
