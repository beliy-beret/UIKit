import { ReactNode } from "react";
import { Colors } from "../colors.ts";

export type TooltipPosition =
  | "TOP"
  | "TR"
  | "TL"
  | "BOTTOM"
  | "BL"
  | "BR"
  | "LEFT"
  | "LT"
  | "LB"
  | "RIGHT"
  | "RT"
  | "RB";

export const TOOLTIP_VARIANT = {
  LIGHT: `color: ${Colors.blueGray["800"]}; background-color: ${Colors.blueGray["10"]};`,
  DARK: `color: ${Colors.blueGray["10"]}; background-color: ${Colors.blueGray["800"]};`,
};

export const TOOLTIP_TRIANGLE_VARIANT = {
  LIGHT: Colors.blueGray["10"],
  DARK: Colors.blueGray["800"],
};
export const TOOLTIP_TRIANGLE_POSITION: { [key in TooltipPosition]: string } = {
  TOP: "top: -7px; left: 50%; translate: -50% -100%;",
  TR: "top: -7px; left: 50%; translate: -50% -100%;",
  TL: "top: -7px; left: 50%; translate: -50% -100%;",
  BOTTOM: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",
  BL: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",
  BR: "bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",
  LEFT: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",
  LT: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",
  LB: "bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",
  RIGHT: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",
  RT: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",
  RB: "bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",
} as const;

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
