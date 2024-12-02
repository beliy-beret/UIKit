import { ColorPalette } from "../colors.ts";

export type ButtonVariant = "Primary" | "Secondary" | "Outline" | "Text";
export type ButtonDesign = keyof typeof ColorPalette;
