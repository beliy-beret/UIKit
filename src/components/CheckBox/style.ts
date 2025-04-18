import styled from "styled-components";
import { Colors } from "../colors";
import { CheckBoxSizeType, checkboxSizes } from "./types.ts";

type Props = {
  $isChecked?: boolean;
  $isDisabled?: boolean;
  $size: CheckBoxSizeType;
};

export const CheckBox = styled.label<Props>`
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  width: ${({ $size }) => `${checkboxSizes[$size]}px`};
  border-radius: 4px;
  border: 1px solid ${Colors.blueGray["300"]};
  background-color: ${Colors.blueGray["25"]};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.blue["10"]};
      border-color: ${Colors.blue["500"]};
    }
  }

  svg {
    width: ${({ $size }) => ($size === "small" ? `10px` : "12px")};
    height: ${({ $size }) => ($size === "small" ? `9px` : "10px")};
    visibility: hidden;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: inline-block;

  input.uikit-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: none !important;
    outline: none !important;
    overflow: hidden;
    appearance: none;
  }

  input:checked.uikit-input + ${CheckBox} {
    background-color: ${Colors.blue["10"]};
    border-color: ${Colors.blue["400"]};

    svg {
      visibility: visible;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${Colors.blue["10"]};
        border-color: ${Colors.blue["500"]};
      }
    }
  }

  input:disabled.uikit-input + ${CheckBox} {
    background-color: ${Colors.blueGray["50"]};
    border-color: ${Colors.blueGray["200"]};
    cursor: default;

    svg {
      path {
        fill: ${Colors.blueGray["200"]};
      }
    }
  }

  input:disabled:checked.uikit-input + ${CheckBox} {
    background-color: ${Colors.blueGray["50"]};
    border-color: ${Colors.blueGray["200"]};
  }

  input:focus-visible.uikit-input + ${CheckBox} {
    outline: none;
    box-shadow: 0 0 0 3px ${Colors.blue["200"]};
  }
`;
