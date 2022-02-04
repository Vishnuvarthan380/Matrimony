import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecommendationsComponent } from './daily-recommendations.component';

describe('DailyRecommendationsComponent', () => {
  let component: DailyRecommendationsComponent;
  let fixture: ComponentFixture<DailyRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
