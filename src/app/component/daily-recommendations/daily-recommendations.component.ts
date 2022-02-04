import { Component, OnInit } from '@angular/core';
import { DailyRecomendationService } from 'src/app/services/daily-recomendation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dailyRecomendationInfo } from 'src/app/models/daily-recomendation-model';
import { animate, keyframes, transition, trigger } from '@angular/animations';
import { swiperight, swipeleft } from 'src/app/keyframes';
import { debounceTime } from 'rxjs/operators';
import { ProfileService } from 'src/app/services/profile.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-daily-recommendations',
  templateUrl: './daily-recommendations.component.html',
  styleUrls: ['./daily-recommendations.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft)))
    ])
  ]
})
export class DailyRecommendationsComponent implements OnInit {

  dailyRecomendationList: dailyRecomendationInfo[] = [];
  animationState: string | any;
  index = 0;

  constructor(
    private toasterService: NbToastrService,
    private dailyRecomendation: DailyRecomendationService
  ) {
    this.getDailyRecomendationList();
   }

  ngOnInit(): void {
  }

  getDailyRecomendationList() {
    this.dailyRecomendation.getDailyRecomendationsDetails().subscribe((result: any) => {
      this.dailyRecomendationList = result.data1.matches;
    }, err => {
      console.log('getProfileDetails', err);
    });
  }

  onSwipeRight(event: any) {
    console.log('swiperight', swiperight)
    console.log('SwipeRight', event)
    this.index++;
    this.animation('intrested')
  }

  onSwipeLeft(event: any) {
    console.log('event left', event)
    this.index++;
    this.animation('notintrested')
  }
  animation(value: any) {

    // this.dataService.checkSpinner(true);
    if (!this.animationState) {
      const duration = 800;
      this.index++;
      if (this.dailyRecomendationList.length === this.index) {
        this.index = 0;
      }
      if (value === 'notintrested') {
        this.toasterService.danger('', 'Not Interested', { duration });
      } else if (value === 'intrested') {
        this.toasterService.success(' ', 'Interested', { duration });
      } else if (value === 'shortlisted') {
        this.toasterService.primary(' ', 'Shortlisted', { duration });
      }
      this.animationState = value;
    }
  }
  resetAnimationState(state: any) {
    this.animationState = '';
  }

}
