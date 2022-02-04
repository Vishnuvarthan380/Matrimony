import { TestBed } from '@angular/core/testing';

import { DailyRecomendationService } from './daily-recomendation.service';

describe('DailyRecomendationService', () => {
  let service: DailyRecomendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyRecomendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
