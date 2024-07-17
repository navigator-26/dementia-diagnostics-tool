import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecommendationsPage } from './recommendations';
import { RecommendationsPagePageRoutingModule } from './recommendations-routing.module';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecommendationsPagePageRoutingModule,
        RoundProgressModule
    ],
    declarations: [RecommendationsPage],
    bootstrap: [RecommendationsPage]
})
export class RecommendationsPageModule {}
