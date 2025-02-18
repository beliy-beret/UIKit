import { ReactNode } from "react";

export type TooltipProps = {
  children: ReactNode;
  open: boolean;
  width?: number;
  white?: boolean;
  padding?: string;
  noTraingle?: boolean;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  mobileWidth?: number;
  mobileTop?: number;
  mobileBottom?: number;
  mobileRight?: number;
  mobileLeft?: number;
  mobileTriangle?: boolean;
  topTriangle?: number;
  leftTriangle?: number;
  textAlign?: "center" | "left" | "right";
};

export type TooltipStyleProps = {
  $open: boolean;
  $width: number;
  $white: boolean;
  $padding: string;
  $noTraingle: boolean;
  $top: string;
  $bottom: string;
  $right: string;
  $left: string;
  $mobileWidth: number;
  $mobileTop: string;
  $mobileBottom: string;
  $mobileRight: string;
  $mobileLeft: string;
  $mobileTriangle: boolean;
  $topTriangle: string;
  $leftTriangle: string;
  $textAlign: "center" | "left" | "right";
};
