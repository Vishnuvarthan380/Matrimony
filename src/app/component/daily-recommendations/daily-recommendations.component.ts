import { Component, OnInit } from '@angular/core';
import { DailyRecomendationService } from 'src/app/services/daily-recomendation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dailyRecomendationInfo } from 'src/app/models/daily-recomendation-model';

@Component({
  selector: 'app-daily-recommendations',
  templateUrl: './daily-recommendations.component.html',
  styleUrls: ['./daily-recommendations.component.css']
})
export class DailyRecommendationsComponent implements OnInit {

  list: dailyRecomendationInfo[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DailyRecomendationService
  ) { }

  ngOnInit(): void {
    // this.getDailyRecomendationsDetails('data')
  }

  getDailyRecomendationList(action: string) {
    this.service.getDailyRecomendationsDetails().subscribe((result: any) => {
      console.log('Daily Recomendations', result)

    }, err => {
      console.log('getProfileDetails', err);
    });
  }

}
