import styled from "styled-components";
import { ColorPalette, Colors } from "../colors.ts";
import { ButtonDesign, ButtonVariant } from "./types.ts";

type ButtonProps = {
  $variant: ButtonVariant;
  $design: ButtonDesign;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: all 200ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: ${Colors.blueGray["300"]};
    color: ${Colors.blueGray["400"]};
    cursor: default;
  }

  ${({ $variant, $design }) =>
    $variant === "Primary" &&
    `
    background-color: ${ColorPalette[$design]["400"]};
    color: ${ColorPalette[$design]["10"]};
    
    @media (hover: hover) {
      &:hover:not(:active) {
        background-color: ${ColorPalette[$design]["500"]};
        color: ${ColorPalette[$design]["10"]};
      }
    }

    &:active {
      background-color: ${ColorPalette[$design]["600"]};
      color: ${ColorPalette[$design]["10"]};
    }

    &:focus-visible {
      background-color: ${ColorPalette[$design]["400"]};
      outline: none;
      box-shadow: inset 0 0 0 3px ${ColorPalette[$design]["200"]};      
      color: ${ColorPalette[$design]["10"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Secondary" &&
    `
    background-color: ${ColorPalette[$design]["10"]};
    color: ${ColorPalette[$design]["400"]};
    
    @media (hover: hover) {
      &:hover:not(:active) {
        background-color: ${ColorPalette[$design]["25"]};
        color: ${ColorPalette[$design]["500"]};
      }
    }

    &:active {
      background-color: ${ColorPalette[$design]["25"]};      
      color: ${ColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ColorPalette[$design]["200"]};      
      color: ${ColorPalette[$design]["400"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Outline" &&
    `
    color: ${ColorPalette[$design]["400"]};
    border: 1px solid ${ColorPalette[$design]["50"]};
    background-color: transparent;
    
    @media (hover: hover) {
      &:hover:not(:active) {
        border-color: ${ColorPalette[$design]["500"]};
        color: ${ColorPalette[$design]["500"]};
      }
    }

    &:active {
      border-color: ${ColorPalette[$design]["600"]};      
      color: ${ColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ColorPalette[$design]["200"]};      
      color: ${ColorPalette[$design]["500"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Text" &&
    `
    background-color: transparent;
    color: ${ColorPalette[$design]["400"]};
    
    &:active {
      color: ${ColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ColorPalette[$design]["200"]};      
      color: ${ColorPalette[$design]["500"]};             
    }

    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${ColorPalette[$design]["500"]};
      }
    } 
  `};
`;
