import styled from "styled-components";
import { Colors } from "../colors";
import { radioSizes, RadioSizeType } from "./types.ts";

type Props = {
  $size: RadioSizeType;
};

export const Box = styled.label<Props>`
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  width: ${({ $size }) => `${radioSizes[$size]}px`};
  border-radius: 50%;
  border: 1px solid ${Colors.blueGray["300"]};
  background-color: ${Colors.blueGray["25"]};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  span.radio-marker {
    display: inline-block;
    aspect-ratio: 1;
    width: ${({ $size }) => ($size === "small" ? "8px" : "10px")};
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.blue["10"]};
      border-color: ${Colors.blue["500"]};
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: inline-block;

  input.uikit-input-radio {
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

  input:checked.uikit-input-radio + ${Box} {
    background-color: ${Colors.blue["10"]};
    border-color: ${Colors.blue["400"]};

    span.radio-marker {
      background-color: ${Colors.blue["400"]};
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${Colors.blue["10"]};
        border-color: ${Colors.blue["500"]};

        span.radio-marker {
          background-color: ${Colors.blue["500"]};
        }
      }
    }
  }

  input:disabled.uikit-input-radio + ${Box} {
    background-color: ${Colors.blueGray["50"]};
    border-color: ${Colors.blueGray["200"]};
    cursor: default;
  }

  input:disabled:checked.uikit-input-radio + ${Box} {
    background-color: ${Colors.blueGray["50"]};
    border-color: ${Colors.blueGray["200"]};

    span.radio-marker {
      background-color: ${Colors.blueGray["200"]};
    }
  }

  input:focus-visible.uikit-input-radio + ${Box} {
    outline: none;
    box-shadow: 0 0 0 3px ${Colors.blue["200"]};
  }
`;
