import styled from "styled-components";
import { Colors } from "../colors.ts";
import { ButtonVariant } from "./types.ts";

type ButtonProps = {
  $variant: ButtonVariant;
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

  ${({ $variant }) =>
    $variant === "bluePrimary" &&
    `
    background-color: ${Colors.blue["400"]};
    color: ${Colors.blue["10"]};
    
    @media (hover: hover) {
      &:hover {
        background-color: ${Colors.blue["500"]};
        color: ${Colors.blue["10"]};
      }
    }

    &:active {
      background-color: ${Colors.blue["600"]};
      color: ${Colors.blue["10"]};
    }

    &:focus-visible {
      background-color: ${Colors.blue["400"]};
      outline: none;
      box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};      
      color: ${Colors.blue["10"]};             
    }

    &:disabled {
      background-color: ${Colors.blueGray["25"]};
      color: ${Colors.blueGray["400"]};
      cursor: default;
    }
  `};

  ${({ $variant }) =>
    $variant === "blueSecondary" &&
    `
    background-color: ${Colors.blue["10"]};
    color: ${Colors.blue["400"]};
    
    @media (hover: hover) {
      &:hover {
        background-color: ${Colors.blue["25"]};
        color: ${Colors.blue["500"]};
      }
    }

    &:active {
      background-color: ${Colors.blue["25"]};      
      color: ${Colors.blue["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};      
      color: ${Colors.blue["400"]};             
    }

    &:disabled {
      background-color: ${Colors.blueGray["25"]};
      color: ${Colors.blueGray["400"]};
      cursor: default;
    }
  `};

  ${({ $variant }) =>
    $variant === "blueOutline" &&
    `
    color: ${Colors.blue["400"]};
    border: 1px solid ${Colors.blue["50"]};
    background-color: transparent;
    
    @media (hover: hover) {
      &:hover {
        border-color: ${Colors.blue["500"]};
        color: ${Colors.blue["500"]};
      }
    }

    &:active {
      border-color: ${Colors.blue["600"]};      
      color: ${Colors.blue["600"]};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};      
      color: ${Colors.blue["500"]};             
    }

    &:disabled {
      border-color: ${Colors.blueGray["300"]};
      color: ${Colors.blueGray["400"]};
      cursor: default;
    }
  `};

  ${({ $variant }) =>
    $variant === "blueLink" &&
    `
    background-color: transparent;
    color: ${Colors.blue["400"]};
    
    &:active {
      color: ${Colors.blue["600"]};
    }

    &:disabled {
      color: ${Colors.blueGray["200"]};
    }
    
    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};      
      color: ${Colors.blue["500"]};             
    }

    @media (hover: hover) {
      &:hover {
        color: ${Colors.blue["500"]};
      }
    } 
  `};
`;
