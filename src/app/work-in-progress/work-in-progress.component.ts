import { Component } from '@angular/core';
import { getRandomInt } from '../common/utils/random';

const PORTFOLIO_VIDEOS = [
  {
    desc: 'this demo of my highschool scholarship submission',
    url: 'https://youtu.be/uMt_jbFHErk',
  },
  {
    desc: 'my nervous presentation showcasing my optimal task scheduler',
    url: 'https://youtu.be/Q5lqypOCKME',
  },
  {
    desc: 'this video of my Android app for buying keyboards',
    url: 'https://youtu.be/DYlfKqbS_3g',
  },
];

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css'],
})
export class WorkInProgressComponent {
  videoDesc: string;
  videoUrl: string;

  constructor() {
    // Randomly assign a portfolio video to showcase per page load.
    let randomVid = PORTFOLIO_VIDEOS[getRandomInt(0, PORTFOLIO_VIDEOS.length)];
    this.videoDesc = randomVid.desc;
    this.videoUrl = randomVid.url;
  }
}
