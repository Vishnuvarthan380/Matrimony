import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRecommendationsRoutingModule } from './daily-recommendations-routing.module';
import { DailyRecommendationsComponent } from 'src/app/component/daily-recommendations/daily-recommendations.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { HammerModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DailyRecommendationsComponent
  ],
  imports: [
    CommonModule,
    DailyRecommendationsRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbLayoutModule,
    HammerModule,
  ]
})
export class DailyRecommendationsModule { }
