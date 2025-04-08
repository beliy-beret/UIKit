import * as S from "./styles";
import { TooltipPosition, TooltipProps } from "./types.ts";
import { Triangle } from "./Triangle.tsx";
import { useState, useRef, MouseEvent } from "react";

export const Tooltip = ({
  children,
  content,
  maxWidth = 200,
  variant = "DARK",
  position,
  open = false,
  triangle = true,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>(
    position || "TOP",
  );
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const calculateTooltipPosition = (event: MouseEvent<HTMLDivElement>) => {
    setIsShowTooltip(true);
    const windowWidth = window.innerWidth;
    const { left, top, right, bottom } =
      event.currentTarget.getBoundingClientRect();

    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.clientWidth;
      const tooltipHeight = tooltipRef.current.clientHeight;

      if (position === "TL") {
        tooltipRef.current.style.top = `${top - tooltipHeight - 12}px`;
        tooltipRef.current.style.left = `${left}px`;
        setTooltipPosition("TL");
        return;
      }
      if (position === "TOP") {
        tooltipRef.current.style.top = `${top - tooltipHeight - 12}px`;
        tooltipRef.current.style.left = `${left - (tooltipWidth - event.currentTarget.clientWidth) / 2}px`;
        setTooltipPosition("TOP");
        return;
      }
      if (position === "TR") {
        tooltipRef.current.style.top = `${top - tooltipHeight - 12}px`;
        tooltipRef.current.style.left = `${right - tooltipWidth}px`;
        setTooltipPosition("TR");
        return;
      }
      if (position === "RT") {
        tooltipRef.current.style.left = `${right + 12}px`;
        tooltipRef.current.style.top = `${top}px`;
        setTooltipPosition("RT");
        return;
      }
      if (position === "RIGHT") {
        tooltipRef.current.style.left = `${right + 12}px`;
        tooltipRef.current.style.top = `${top - (tooltipHeight - event.currentTarget.clientHeight) / 2}px`;
        setTooltipPosition("RIGHT");
        return;
      }
      if (position === "RB") {
        tooltipRef.current.style.left = `${right + 12}px`;
        tooltipRef.current.style.top = `${bottom - tooltipHeight}px`;
        setTooltipPosition("RB");
        return;
      }
      if (position === "BR") {
        tooltipRef.current.style.top = `${bottom + 12}px`;
        tooltipRef.current.style.left = `${right - tooltipWidth}px`;
        setTooltipPosition("BR");
        return;
      }
      if (position === "BOTTOM") {
        tooltipRef.current.style.top = `${bottom + 12}px`;
        tooltipRef.current.style.left = `${left - (tooltipWidth - event.currentTarget.clientWidth) / 2}px`;
        setTooltipPosition("BOTTOM");
        return;
      }
      if (position === "BL") {
        tooltipRef.current.style.top = `${bottom + 12}px`;
        tooltipRef.current.style.left = `${left}px`;
        setTooltipPosition("BL");
        return;
      }
      if (position === "LT") {
        tooltipRef.current.style.top = `${top}px`;
        tooltipRef.current.style.left = `${left - tooltipWidth - 12}px`;
        setTooltipPosition("LT");
        return;
      }
      if (position === "LEFT") {
        tooltipRef.current.style.top = `${top - (tooltipHeight - event.currentTarget.clientHeight) / 2}px`;
        tooltipRef.current.style.left = `${left - tooltipWidth - 12}px`;
        setTooltipPosition("LEFT");
        return;
      }
      if (position === "LB") {
        tooltipRef.current.style.top = `${bottom - tooltipHeight}px`;
        tooltipRef.current.style.left = `${left - tooltipWidth - 12}px`;
        setTooltipPosition("LB");
        return;
      }

      if (top >= tooltipHeight + 12) {
        tooltipRef.current.style.top = `${top - tooltipHeight - 12}px`;

        if (left <= (tooltipWidth - event.currentTarget.clientWidth) / 2) {
          tooltipRef.current.style.left = `${left}px`;
          setTooltipPosition("TL");
          return;
        }

        if (
          windowWidth - right <=
          (tooltipWidth - event.currentTarget.clientWidth) / 2
        ) {
          tooltipRef.current.style.left = `${right - tooltipWidth}px`;
          setTooltipPosition("TR");
          return;
        }

        tooltipRef.current.style.left = `${left - (tooltipWidth - event.currentTarget.clientWidth) / 2}px`;
        setTooltipPosition("TOP");
        return;
      }

      if (windowWidth - right >= tooltipWidth + 12) {
        tooltipRef.current.style.left = `${right + 12}px`;

        if (top <= (tooltipHeight - event.currentTarget.clientHeight) / 2) {
          tooltipRef.current.style.top = `${top}px`;
          setTooltipPosition("RT");
          return;
        }

        tooltipRef.current.style.top = `${top - (tooltipHeight - event.currentTarget.clientHeight) / 2}px`;
        setTooltipPosition("RIGHT");
        return;
      }

      tooltipRef.current.style.top = `${bottom + 12}px`;
      if (
        windowWidth - right <=
        (tooltipWidth - event.currentTarget.clientWidth) / 2
      ) {
        tooltipRef.current.style.left = `${right - tooltipWidth}px`;
        setTooltipPosition("BR");
        return;
      }
      tooltipRef.current.style.left = `${left - (tooltipWidth - event.currentTarget.clientWidth) / 2}px`;
      setTooltipPosition("BOTTOM");
    }
  };

  const hideTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.top = "-100%";
      setIsShowTooltip(false);
    }
  };

  return (
    <S.Wrapper
      $variant={variant}
      $position={tooltipPosition}
      onMouseEnter={calculateTooltipPosition}
      onMouseLeave={hideTooltip}
      aria-expanded={open || isShowTooltip}
      aria-label="tooltip-wrapper"
    >
      {triangle && <Triangle />}

      <S.Tooltip
        ref={tooltipRef}
        $variant={variant}
        $position={tooltipPosition}
        aria-label="tooltip"
        $maxWidth={maxWidth}
      >
        {content}
      </S.Tooltip>
      {children}
    </S.Wrapper>
  );
};
