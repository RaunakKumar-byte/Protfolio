import { trigger, transition, style, animate, query, stagger, group } from '@angular/animations';

export const pageAnimations = trigger('pageAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
    ], { optional: true })
  ]),
]);

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('500ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
  ])
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleAnimation = trigger('scale', [
  transition(':enter', [
    style({ transform: 'scale(0)', opacity: 0 }),
    animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', 
      style({ transform: 'scale(1)', opacity: 1 })
    )
  ])
]);

export const flipAnimation = trigger('flip', [
  transition(':enter', [
    style({ transform: 'rotateY(90deg)', opacity: 0 }),
    animate('600ms ease-out', style({ transform: 'rotateY(0deg)', opacity: 1 }))
  ])
]);