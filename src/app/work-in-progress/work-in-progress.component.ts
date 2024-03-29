import { Component, OnDestroy } from '@angular/core';
import { riseAnimation } from '../common/animations/rise.animation';

const PORTFOLIO_ITEM_LIFE_MS = 5000;

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css'],
  animations: [riseAnimation(300, 100)],
})
export class WorkInProgressComponent implements OnDestroy {
  private portfolioCycleRef;
  protected portfolioIdx: number = 0;
  protected riseAnimState: 'start' | 'end' = 'end';

  readonly PORTFOLIO_ITEMS = [
    {
      desc: 'my nervous presentation showcasing my optimal task scheduler',
      url: 'https://youtu.be/Q5lqypOCKME',
    },
    {
      desc: 'this video of my Android app for buying keyboards',
      url: 'https://youtu.be/DYlfKqbS_3g',
    },
    {
      desc: 'this demo of my highschool scholarship submission',
      url: 'https://youtu.be/uMt_jbFHErk',
    },
  ];

  constructor() {
    this.portfolioCycleRef = setInterval(() => {
      this.riseAnimState = 'start'; // Trigger rising animation
      this.portfolioIdx = (this.portfolioIdx + 1) % this.PORTFOLIO_ITEMS.length;
    }, PORTFOLIO_ITEM_LIFE_MS);
  }

  ngOnDestroy(): void {
    // Clean up portfolio cycle timer
    clearTimeout(this.portfolioCycleRef);
  }
}
