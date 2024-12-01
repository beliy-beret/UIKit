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

  input {
    background-color: ${Colors.gray["10"]};
    border-radius: 4px;
    width: 100%;
    padding: 8px 38px 8px 16px;
    color: #1d1c29;
    border: 1px solid transparent;
    font-size: 14px;
    ${({ $error }) => $error && `border-color: ${Colors.red["400"]}`};

    &:focus-visible {
      outline: none;
      ${({ $error }) =>
        !$error && `box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};`};
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
