import styled from "styled-components";
import {
  TOOLTIP_TRIANGLE_POSITION,
  TOOLTIP_TRIANGLE_VARIANT,
  TOOLTIP_VARIANT,
  TooltipStyleProps,
} from "./types.ts";
import { theme } from "../theme.ts";

export const Tooltip = styled.div<TooltipStyleProps>`
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  top: -100%;
  left: 0;
  opacity: 0;
  border-radius: 8px;
  width: fit-content;
  height: auto;
  padding: 8px 12px;
  max-width: ${({ $maxWidth }) => `${$maxWidth}px`};
  transition: opacity 300ms ease-in-out;

  ${theme.text.font12.medium};
  ${({ $variant }) => TOOLTIP_VARIANT[$variant]};
`;

export const Wrapper = styled.div<Omit<TooltipStyleProps, "$maxWidth">>`
  position: relative;
  width: fit-content;
  max-height: fit-content;

  svg.tooltip-triangle {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    path {
      fill: ${({ $variant }) => TOOLTIP_TRIANGLE_VARIANT[$variant]};
    }
    ${({ $position }) => TOOLTIP_TRIANGLE_POSITION[$position!]};
  }

  &[aria-expanded="true"] {
    ${Tooltip} {
      opacity: 1;
    }
    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }
`;
