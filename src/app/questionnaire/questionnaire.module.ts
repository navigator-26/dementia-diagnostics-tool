import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionnarie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    QuestionnaireRoutingModule
  ],
  declarations: [QuestionnaireComponent],
})
export class QuestionnaireModule {}
