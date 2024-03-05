import { AnimationTriggerMetadata, animate, style, transition, trigger } from "@angular/animations";

// animation.ts

export function FadeIn(timingIn: number, height: boolean = false): AnimationTriggerMetadata {
    return trigger('fadeIn', [
        transition(':enter', [
            style(height ? { opacity: 0, height: 0, } : { opacity: 0, }),
            animate(timingIn, style(height ? { opacity: 1, height: 'fit-content' } : { opacity: 1, })),
        ]),
    ]);
}



export function InOutPaneAnimation(timingIn: number): AnimationTriggerMetadata {
    return trigger("slidein", [
        transition(":enter", [
            style({ opacity: 0, transform: "translateX(-100%)" }), //apply default styles before animation starts
            animate(
                "750ms ease-in-out",
                style({ opacity: 1, transform: "translateX(0)" })
            )
        ]),
        transition(":leave", [
            style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
            animate(
                "600ms ease-in-out",
                style({ opacity: 0, transform: "translateX(-100%)" })
            )
        ])
    ]);
}

