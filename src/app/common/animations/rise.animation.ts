import {
  AnimationMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function riseAnimation(
  enterMs: number,
  exitMs: number
): AnimationMetadata[] {
  return [
    trigger('rise', [
      state(
        'start',
        style({
          opacity: 0,
          transform: 'translateY(0.5em)',
        })
      ),
      state(
        'end',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('start => end', [animate(`${enterMs}ms`)]),
      transition('end => start', [animate(`${exitMs}ms`)]),
    ]),
  ];
}
