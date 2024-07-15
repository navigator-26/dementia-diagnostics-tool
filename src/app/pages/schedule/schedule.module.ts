import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SchedulePageRoutingModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        SchedulePage,
        ScheduleFilterPage
    ]
})
export class ScheduleModule { }
