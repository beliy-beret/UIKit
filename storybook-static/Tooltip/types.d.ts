import { ReactNode } from '../../../node_modules/react';
export declare const TOOLTIP_POSITION: {
    readonly TOP: "bottom: 100%; left: 50%; translate: -50% 0; margin-bottom: 12px;";
    readonly TR: "right:0; bottom: 100%; margin-bottom: 12px;";
    readonly TL: "bottom: 100%; left: 0; margin-bottom: 12px;";
    readonly BOTTOM: "top: 100%; left: 50%; translate: -50% 0; margin-top: 12px;";
    readonly BL: "top: 100%; left: 0; margin-top: 12px;";
    readonly BR: "top: 100%; right: 0; margin-top: 12px;";
    readonly LEFT: "top: 50%; right: 100%; translate: 0 -50%; margin-right: 12px;";
    readonly LT: "top: 0; right: 100%; margin-right: 12px;";
    readonly LB: "bottom: 0; right: 100%; margin-right: 12px;";
    readonly RIGHT: "bottom: 50%; left: 100%; translate: 0 50%; margin-left: 12px;";
    readonly RT: "top: 0; left: 100%; margin-left: 12px;";
    readonly RB: "bottom: 0; left: 100%; margin-left: 12px;";
};
export declare const TOOLTIP_VARIANT: {
    LIGHT: string;
    DARK: string;
};
export declare const TOOLTIP_TRIANGLE_VARIANT: {
    LIGHT: string;
    DARK: string;
};
export declare const TOOLTIP_TRIANGLE_POSITION: {
    readonly TOP: "top: -7px; left: 50%; translate: -50% -100%;";
    readonly TR: "top: -7px; left: 50%; translate: -50% -100%;";
    readonly TL: "top: -7px; left: 50%; translate: -50% -100%;";
    readonly BOTTOM: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg";
    readonly BL: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg";
    readonly BR: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg";
    readonly LEFT: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg";
    readonly LT: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg";
    readonly LB: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg";
    readonly RIGHT: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg";
    readonly RT: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg";
    readonly RB: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg";
};
type TooltipVariant = keyof typeof TOOLTIP_VARIANT;
export type TooltipPosition = keyof typeof TOOLTIP_POSITION;
export type TooltipProps = {
    content: ReactNode | string;
    children?: ReactNode;
    open?: boolean;
    triangle?: boolean;
    position?: TooltipPosition;
    variant?: TooltipVariant;
};
export type TooltipStyleProps = {
    $position: TooltipPosition;
    $variant: TooltipVariant;
};
export {};
