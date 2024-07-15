import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome';
import { WelcomePageRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePage],
})
export class WelcomeModule {}
