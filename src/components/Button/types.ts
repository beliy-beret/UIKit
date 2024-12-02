import { Colors } from "../colors.ts";

export type ButtonVariant = "Primary" | "Secondary" | "Outline" | "Text";

export const ButtonColorPalette = {
  Informative: Colors.purple,
  Body: Colors.blueGray,
  Dangerous: Colors.red,
  Completed: Colors.green,
  Primary: Colors.blue,
  Warning: Colors.yellow,
} as const;

export type ButtonDesign = keyof typeof ButtonColorPalette;
