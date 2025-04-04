import { HTMLAttributes } from '../../../../node_modules/react';
export type Width = "Light" | "Regular" | "Medium" | "Bold";
export type Size = "12" | "14" | "16" | "18" | "20" | "36";
export declare const fontFamily: {
    readonly Light: "Manrope Light";
    readonly Regular: "Manrope Regular";
    readonly Medium: "Manrope Medium";
    readonly Bold: "Manrope Bold";
};
export type SpanProps = HTMLAttributes<HTMLSpanElement> & {
    fontWidth: Width;
    fontSize: Size;
};
export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
    fontWidth: Width;
    fontSize: Size;
};
