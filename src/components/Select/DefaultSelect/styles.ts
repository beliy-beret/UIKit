import styled from "styled-components";
import { Colors } from "../../colors.ts";

type Props = {
  $error?: boolean;
};

export const CustomSelect = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  input.uikit-select-input {
    outline: none;
    background-color: ${Colors.gray["10"]};
    border-radius: 4px;
    width: 100%;
    padding: 8px 38px 8px 16px;
    color: #1d1c29;
    border: 1px solid transparent;
    font-size: 14px;
    cursor: pointer;
    ${({ $error }) => $error && `border-color: ${Colors.red["400"]}`};

    &:focus-visible {
      ${({ $error }) =>
        !$error &&
        `box-shadow: 0 0 0 3px ${Colors.blue["200"]}; border-color: ${Colors.blue["400"]}`};
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${Colors.blueGray["25"]};
        color: ${Colors.blue["500"]};
      }
    }

    &:disabled {
      border-color: ${Colors.blueGray["300"]};
      color: ${Colors.blueGray["300"]};
      background-color: ${Colors.blueGray["50"]};
      cursor: auto;

      & + span.chevron {
        cursor: auto;
        pointer-events: none;
      }
    }
  }

  .chevron {
    width: fit-content;
    position: absolute;
    display: grid;
    place-items: center;
    transition: rotate 200ms ease-in-out;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    cursor: pointer;
    padding: 8px 16px;

    svg {
      margin-left: auto;
      width: 16px;
      height: 16px;
      rotate: -90deg;
    }
  }

  &[aria-expanded="true"] {
    .chevron {
      rotate: 180deg;
    }
  }
`;
