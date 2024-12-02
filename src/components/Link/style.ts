import styled from "styled-components";
import { LinkDesign } from "./types.ts";
import { ColorPalette, Colors } from "../colors.ts";

type Props = {
  $design: LinkDesign;
};

export const StyledLink = styled.a<Props>`
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ $design }) => `
    color: ${ColorPalette[$design][$design === "Informative" ? "800" : "400"]};
    
    &:disabled {
      color: ${$design === "Informative" || $design === "Body" ? Colors.blue["200"] : ColorPalette[$design]["200"]};
    }
    
    &:active {
      color: ${$design === "Informative" ? Colors.blue["600"] : ColorPalette[$design]["600"]};
    };
    
    &:focus-visible {
      box-shadow: 0 0 0 3px ${$design === "Informative" ? Colors.blue["200"] : ColorPalette[$design]["200"]}; 
      color: ${$design === "Informative" ? Colors.blue["500"] : ColorPalette[$design]["500"]};
    };
    
    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${$design === "Informative" ? Colors.blue["500"] : ColorPalette[$design]["500"]};
      }
    }           
  `};
`;
