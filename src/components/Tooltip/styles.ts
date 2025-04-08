import styled from "styled-components";
import {
  TOOLTIP_TRIANGLE_POSITION,
  TOOLTIP_TRIANGLE_VARIANT,
  TOOLTIP_VARIANT,
  TooltipStyleProps,
} from "./types.ts";
import { theme } from "../theme.ts";

export const Tooltip = styled.div<TooltipStyleProps>`
  display: none;
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  border-radius: 8px;
  width: fit-content;
  height: auto;
  padding: 8px 12px;
  max-width: ${({ $maxWidth }) => `${$maxWidth}px`};

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

    path {
      fill: ${({ $variant }) => TOOLTIP_TRIANGLE_VARIANT[$variant]};
    }
    ${({ $position }) => TOOLTIP_TRIANGLE_POSITION[$position!]};
  }

  &[aria-expanded="true"] {
    ${Tooltip} {
      display: block;
    }

    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }
`;
