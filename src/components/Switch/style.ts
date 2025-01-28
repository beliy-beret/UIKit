import styled from "styled-components";
import { Colors } from "../colors.ts";
import { SwitchSize } from "./types.ts";

export const Circle = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  box-shadow: 0 2px 4px 0 rgba(142, 140, 163, 0.12);
  border-radius: 50%;
`;

export const Wrapper = styled.label<{
  $size: SwitchSize;
  $checked: boolean;
  $disabled: boolean | undefined;
}>`
  input.uikit-switch-input {
    outline: none;
    width: 0;
    height: 0;
    position: absolute;
    top: -100%;
    left: 0;
  }

  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2px;
  overflow: hidden;
  border: 1px solid ${Colors.blue["200"]};
  border-radius: 200px;

  ${({ $size }) =>
    $size === "small"
      ? "width: 36px; height: 20px;"
      : "width: 44px; height: 24px;"};

  ${({ $checked }) =>
    $checked
      ? `background-color: ${Colors.blue["400"]}; ${Circle} { grid-column: 2; }`
      : `background-color: ${Colors.blueGray["25"]}; ${Circle} { grid-column: 1; }`};

  ${({ $disabled }) =>
    $disabled &&
    `background-color: ${Colors.blueGray["200"]}; pointer-events: none; ${Circle} { background-color: ${Colors.blueGray["25"]}; }`};

  &:focus-visible {
    box-shadow: 0 0 0 3px ${Colors.blue["200"]};
    outline: none;
  }

  @media (hover: hover) {
    ${({ $disabled }) =>
      !$disabled &&
      `
      &:hover {
        cursor: pointer;
        background-color: ${Colors.blueGray["50"]};        
      }
    `}
  }
`;
