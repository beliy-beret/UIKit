import { ReactNode } from "react";
import { Colors } from "../colors.ts";

export const TOOLTIP_POSITION = {
  TOP: "bottom: 100%; left: 50%; translate: -50% 0; margin-bottom: 12px;",
  TR: "right:0; bottom: 100%; margin-bottom: 12px;",
  TL: "bottom: 100%; left: 0; margin-bottom: 12px;",
  BOTTOM: "top: 100%; left: 50%; translate: -50% 0; margin-top: 12px;",
  BL: "top: 100%; left: 0; margin-top: 12px;",
  BR: "top: 100%; right: 0; margin-top: 12px;",
  LEFT: "top: 50%; right: 100%; translate: 0 -50%; margin-right: 12px;",
  LT: "top: 0; right: 100%; margin-right: 12px;",
  LB: "bottom: 0; right: 100%; margin-right: 12px;",
  RIGHT: "bottom: 50%; left: 100%; translate: 0 50%; margin-left: 12px;",
  RT: "top: 0; left: 100%; margin-left: 12px;",
  RB: "bottom: 0; left: 100%; margin-left: 12px;",
} as const;

export const TOOLTIP_VARIANT = {
  LIGHT: `color: ${Colors.blueGray["800"]}; background-color: ${Colors.blueGray["10"]};`,
  DARK: `color: ${Colors.blueGray["10"]}; background-color: ${Colors.blueGray["800"]};`,
};

export const TOOLTIP_TRIANGLE_VARIANT = {
  LIGHT: Colors.blueGray["10"],
  DARK: Colors.blueGray["800"],
};
export const TOOLTIP_TRIANGLE_POSITION = {
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
