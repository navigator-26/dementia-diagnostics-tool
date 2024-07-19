import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecommendationsPagePageRoutingModule } from './recommendations-routing.module';
import { RecommendationsPage } from './recommendations';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { QuestionerData } from '../../providers/questioner.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecommendationsPagePageRoutingModule,
        RoundProgressModule
    ],
   // providers: [QuestionerData],
    declarations: [RecommendationsPage],
    bootstrap: [RecommendationsPage]
})
export class RecommendationsPageModule {}
