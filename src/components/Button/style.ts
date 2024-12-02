import styled from "styled-components";
import { Colors } from "../colors.ts";
import { ButtonDesign, ButtonVariant, ButtonColorPalette } from "./types.ts";

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
    background-color: ${ButtonColorPalette[$design]["400"]};
    color: ${ButtonColorPalette[$design]["10"]};
    
    @media (hover: hover) {
      &:hover:not(:active) {
        background-color: ${ButtonColorPalette[$design]["500"]};
        color: ${ButtonColorPalette[$design]["10"]};
      }
    }

    &:active {
      background-color: ${ButtonColorPalette[$design]["600"]};
      color: ${ButtonColorPalette[$design]["10"]};
    }

    &:focus-visible {
      background-color: ${ButtonColorPalette[$design]["400"]};
      outline: none;
      box-shadow: inset 0 0 0 3px ${ButtonColorPalette[$design]["200"]};      
      color: ${ButtonColorPalette[$design]["10"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Secondary" &&
    `
    background-color: ${ButtonColorPalette[$design]["10"]};
    color: ${ButtonColorPalette[$design]["400"]};
    
    @media (hover: hover) {
      &:hover:not(:active) {
        background-color: ${ButtonColorPalette[$design]["25"]};
        color: ${ButtonColorPalette[$design]["500"]};
      }
    }

    &:active {
      background-color: ${ButtonColorPalette[$design]["25"]};      
      color: ${ButtonColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ButtonColorPalette[$design]["200"]};      
      color: ${ButtonColorPalette[$design]["400"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Outline" &&
    `
    color: ${ButtonColorPalette[$design]["400"]};
    border: 1px solid ${ButtonColorPalette[$design]["50"]};
    background-color: transparent;
    
    @media (hover: hover) {
      &:hover:not(:active) {
        border-color: ${ButtonColorPalette[$design]["500"]};
        color: ${ButtonColorPalette[$design]["500"]};
      }
    }

    &:active {
      border-color: ${ButtonColorPalette[$design]["600"]};      
      color: ${ButtonColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ButtonColorPalette[$design]["200"]};      
      color: ${ButtonColorPalette[$design]["500"]};             
    }    
  `};

  ${({ $variant, $design }) =>
    $variant === "Link" &&
    `
    background-color: transparent;
    color: ${ButtonColorPalette[$design]["400"]};
    
    &:active {
      color: ${ButtonColorPalette[$design]["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${ButtonColorPalette[$design]["200"]};      
      color: ${ButtonColorPalette[$design]["500"]};             
    }

    @media (hover: hover) {
      &:hover:not(:active) {
        color: ${ButtonColorPalette[$design]["500"]};
      }
    } 
  `};
`;
