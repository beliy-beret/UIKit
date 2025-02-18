import styled from "styled-components";
import { TooltipStyleProps } from "./types.ts";
import { Colors } from "../colors.ts";

export const Tooltip = styled.div<TooltipStyleProps>`
  position: absolute;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  width: ${({ $width }) => ($width ? `${$width}px` : "300px")};

  left: ${({ $left }) => ($left ? $left : "auto")};
  right: ${({ $right }) => ($right ? $right : "auto")};
  top: ${({ $top }) => ($top ? $top : "auto")};
  bottom: ${({ $bottom }) => ($bottom ? $bottom : "auto")};

  padding: ${({ $padding }) => ($padding ? $padding : "10px")};
  background-color: ${({ $white }) =>
    $white ? Colors.white : Colors.blueGray["800"]};
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(39, 62, 97, 0.24);

  z-index: 300;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${({ $white }) => ($white ? Colors.blueGray["800"] : Colors.white)};
  text-transform: none;

  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}

  &:before {
    content: "";
    position: absolute;
    top: ${({ $topTriangle }) => ($topTriangle ? $topTriangle : "0")};
    left: ${({ $leftTriangle }) => ($leftTriangle ? $leftTriangle : "50%")};
    transform: rotate(45deg) translateX(-50%);
    width: 10px;
    height: 10px;
    background-color: ${({ $white }) =>
      $white ? Colors.white : Colors.blueGray["800"]};
  }

  animation: 0.3s ease-in 0.1s both fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    width: ${({ $mobileWidth }) => ($mobileWidth ? $mobileWidth : "200px")};

    ${({ $noTraingle, $mobileTriangle }) =>
      !$noTraingle &&
      `
    :before {
      top: 0;
      left: ${$mobileTriangle ? $mobileTriangle : "50%"};
    }`};
  }
`;
