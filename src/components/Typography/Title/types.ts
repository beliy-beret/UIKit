import { HTMLAttributes } from "react";

export type Width = "Light" | "Regular" | "Medium" | "Bold";

export const fontFamily = {
  Light: "Manrope Light",
  Regular: "Manrope Regular",
  Medium: "Manrope Medium",
  Bold: "Manrope Bold",
} as const;

export type TitleProps = HTMLAttributes<HTMLHeadElement> & {
  fontWidth: Width;
};
