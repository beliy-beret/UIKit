import { HTMLAttributes } from "react";

export type Width = "Light" | "Regular" | "Medium" | "Bold";
export type Size = "12" | "14" | "16" | "18" | "20" | "36";

export const fontFamily = {
  Light: "Manrope Light",
  Regular: "Manrope Regular",
  Medium: "Manrope Medium",
  Bold: "Manrope Bold",
} as const;

export type SpanProps = HTMLAttributes<HTMLSpanElement> & {
  fontWidth: Width;
  fontSize: Size;
};
export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  fontWidth: Width;
  fontSize: Size;
};
