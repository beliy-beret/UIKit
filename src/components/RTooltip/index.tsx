import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { TooltipProps } from "./types.ts";

export const RTooltip = ({
  children,
  open,
  width = 200,
  white = true,
  padding = "10px",
  noTraingle = false,
  top = 0,
  bottom,
  right,
  left = 0,
  mobileWidth,
  mobileTop,
  mobileBottom,
  mobileRight,
  mobileLeft,
  mobileTriangle,
  topTriangle,
  leftTriangle,
  textAlign,
}: TooltipProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentRight, setCurrentRight] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    new IntersectionObserver((entries) => {
      const rootWidth = entries[0]?.rootBounds?.width || 0;
      const boundLeft = entries[0]?.boundingClientRect.left + 159;
      const boundTop = entries[0]?.boundingClientRect?.height;

      if (right) {
        setCurrentRight(right);
      } else if (rootWidth > boundLeft + width) {
        setCurrentRight(-width + entries[0]?.target?.parentNode?.offsetWidth);
      } else {
        setCurrentRight(-1);
      }

      if (top < 0) {
        setCurrentTop(boundTop - 2);
      }
    }).observe(ref.current);
  }, [ref]);

  return (
    <S.Tooltip
      ref={ref}
      $width={width}
      $open={open}
      $top={`${top}px`}
      $bottom={`${bottom}px`}
      $right={`${currentRight}px`}
      $left={`${left}px`}
      $white={white}
      $padding={padding}
      $noTraingle={noTraingle}
      $topTriangle={topTriangle || `${currentTop}px`}
      $leftTriangle={
        leftTriangle || currentRight < -1 ? "20px" : `${width - 20}px`
      }
      $mobileWidth={mobileWidth}
      $mobileTop={mobileTop}
      $mobileBottom={mobileBottom}
      $mobileRight={mobileRight}
      $mobileLeft={mobileLeft}
      $mobileTriangle={mobileTriangle}
      $textAlign={textAlign}
    >
      {children}
    </S.Tooltip>
  );
};
