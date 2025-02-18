import styled from "styled-components";
import {
  TOOLTIP_POSITION,
  TOOLTIP_TRIANGLE_POSITION,
  TOOLTIP_TRIANGLE_VARIANT,
  TOOLTIP_VARIANT,
  TooltipStyleProps,
} from "./types.ts";
import { theme } from "../theme.ts";

export const Tooltip = styled.div<TooltipStyleProps>`
  box-sizing: border-box;
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  max-width: max-content;
  position: absolute;
  border-radius: 8px;
  transition: opacity 300ms ease-in-out;
  ${theme.text.font12.medium};
  ${({ $position }) => TOOLTIP_POSITION[$position]};
  ${({ $variant }) => TOOLTIP_VARIANT[$variant]};
`;

export const Wrapper = styled.div<
  TooltipStyleProps & {
    $width: number | undefined;
  }
>`
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
    ${({ $position }) => TOOLTIP_TRIANGLE_POSITION[$position]};
  }

  &[aria-expanded="true"] {
    ${Tooltip} {
      padding: 8px 12px;
      opacity: 1;
      height: auto;
      overflow: visible;
      ${({ $width }) =>
        $width ? `width: ${$width}px; max-width: unset` : "width: 100dvw;"}
    }

    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }

  &:hover {
    ${Tooltip} {
      padding: 8px 12px;
      opacity: 1;
      height: auto;
      overflow: visible;
      ${({ $width }) =>
        $width ? `width: ${$width}px; max-width: unset` : "width: 100dvw;"}
    }

    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }
`;
