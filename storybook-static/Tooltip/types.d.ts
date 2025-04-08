import { ReactNode } from '../../../node_modules/react';
export type TooltipPosition = "TOP" | "TR" | "TL" | "BOTTOM" | "BL" | "BR" | "LEFT" | "LT" | "LB" | "RIGHT" | "RT" | "RB";
export declare const TOOLTIP_VARIANT: {
    LIGHT: string;
    DARK: string;
};
export declare const TOOLTIP_TRIANGLE_VARIANT: {
    LIGHT: string;
    DARK: string;
};
export declare const TOOLTIP_TRIANGLE_POSITION: {
    [key in TooltipPosition]: string;
};
type TooltipVariant = keyof typeof TOOLTIP_VARIANT;
export type TooltipProps = {
    content: ReactNode | string;
    children?: ReactNode;
    open?: boolean;
    triangle?: boolean;
    position?: TooltipPosition;
    variant?: TooltipVariant;
    maxWidth?: number;
};
export type TooltipStyleProps = {
    $position?: TooltipPosition;
    $variant: TooltipVariant;
    $maxWidth: number;
};
export {};
