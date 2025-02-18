import * as S from "./styles";
import { TooltipPosition, TooltipProps } from "./types.ts";
import { Triangle } from "./Triangle.tsx";
import { useState, useRef, MouseEvent } from "react";

export const Tooltip = ({
  children,
  content,
  width,
  variant = "DARK",
  position,
  open = false,
  triangle = true,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>(
    position || "TOP",
  );

  const getTotalOffsetLeft = (element: any) => {
    let offset = element.offsetLeft;

    if (element.offsetParent && element.offsetParent !== document.body) {
      offset += getTotalOffsetLeft(element.offsetParent);
    }

    return offset;
  };

  const getTotalOffsetTop = (element: any) => {
    let offset = element.offsetTop;

    if (element.offsetParent && element.offsetParent !== document.body) {
      offset += getTotalOffsetTop(element.offsetParent);
    }

    return offset;
  };

  const calculateTooltipPosition = (event: MouseEvent<HTMLDivElement>) => {
    if (position) return;

    const tooltipWidth = tooltipRef.current?.clientWidth || 0;
    const tooltipHeight = tooltipRef.current?.clientHeight || 0;
    const containerWidth = event.currentTarget.clientWidth;
    const containerHeight = event.currentTarget.clientHeight;
    const widthDiff = Math.ceil((tooltipWidth - containerWidth) / 2);
    const heightDiff = Math.ceil((tooltipHeight - containerHeight) / 2);
    const spaceLeft = getTotalOffsetLeft(event.currentTarget);
    const spaceRight = window.innerWidth - containerWidth - spaceLeft - 18;
    const spaceTop = getTotalOffsetTop(event.currentTarget);
    const spaceBottom =
      window.innerHeight - event.currentTarget.offsetHeight - spaceTop;

    console.log("spaceLeft:", spaceLeft);
    console.log("spaceRight:", spaceRight);
    console.log("spaceTop:", spaceTop);
    console.log("spaceBottom:", spaceBottom);

    if (spaceTop > tooltipHeight + 16 && spaceLeft < widthDiff) {
      return setTooltipPosition("TL");
    }
    if (spaceTop > tooltipHeight + 16 && spaceRight < widthDiff) {
      return setTooltipPosition("TR");
    }
    if (spaceTop > tooltipHeight + 16) {
      return setTooltipPosition("TOP");
    }

    if (spaceRight > tooltipWidth && spaceTop < heightDiff) {
      return setTooltipPosition("RT");
    }
    if (spaceRight > tooltipWidth && spaceBottom < heightDiff) {
      return setTooltipPosition("RB");
    }
    if (spaceRight > tooltipWidth) {
      return setTooltipPosition("RIGHT");
    }

    if (spaceBottom > tooltipHeight + 16 && spaceLeft < widthDiff) {
      return setTooltipPosition("BL");
    }
    if (spaceBottom > tooltipHeight + 16 && spaceRight < widthDiff) {
      return setTooltipPosition("BR");
    }
    if (spaceBottom > tooltipHeight + 16) {
      return setTooltipPosition("BR");
    }

    if (spaceTop < heightDiff) {
      return setTooltipPosition("LT");
    }
    if (spaceBottom < heightDiff) {
      return setTooltipPosition("LB");
    }
    setTooltipPosition("LEFT");
  };

  return (
    <S.Wrapper
      $width={width}
      $variant={variant}
      $position={tooltipPosition}
      onMouseEnter={calculateTooltipPosition}
      aria-expanded={open}
    >
      {triangle && <Triangle />}

      <S.Tooltip
        ref={tooltipRef}
        $variant={variant}
        $position={tooltipPosition}
        aria-label="tooltip"
      >
        {content}
      </S.Tooltip>
      {children}
    </S.Wrapper>
  );
};
