import { HTMLAttributes } from '../../../../node_modules/react';
export type Width = "Light" | "Regular" | "Medium" | "Bold";
export declare const fontFamily: {
    readonly Light: "Manrope Light";
    readonly Regular: "Manrope Regular";
    readonly Medium: "Manrope Medium";
    readonly Bold: "Manrope Bold";
};
export type TitleProps = HTMLAttributes<HTMLHeadElement> & {
    fontWidth: Width;
};
