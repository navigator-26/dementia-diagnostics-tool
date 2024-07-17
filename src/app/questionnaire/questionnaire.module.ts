import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionnarie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    QuestionnaireRoutingModule
  ],
  declarations: [QuestionnaireComponent],
})
export class QuestionnaireModule {}
