import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRecommendationsRoutingModule } from './daily-recommendations-routing.module';
import { DailyRecommendationsComponent } from 'src/app/component/daily-recommendations/daily-recommendations.component';


@NgModule({
  declarations: [
    DailyRecommendationsComponent
  ],
  imports: [
    CommonModule,
    DailyRecommendationsRoutingModule
  ]
})
export class DailyRecommendationsModule { }
