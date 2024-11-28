import styled from "styled-components";
import { Colors } from "../../../colors";

type Props = {
  $isChecked?: boolean;
  $isDisabled?: boolean;
};

export const Wrapper = styled.div`
  input {
    display: none;
  }
`;

export const CheckBox = styled.label<Props>`
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition: all 200ms ease-in-out;

  ${({ $isChecked, $isDisabled }) => {
    if ($isDisabled) {
      return `
        background-color: ${Colors.blueGray["50"]};
        border-color: ${Colors.blueGray["200"]};
      `;
    }
    if ($isChecked) {
      return `
        background-color: ${Colors.blue["10"]};
        border-color: ${Colors.blue["400"]};
      `;
    }

    if ($isChecked && $isDisabled) {
      return `
        background-color: ${Colors.blueGray["50"]};
        border-color: ${Colors.blueGray["200"]};
      `;
    }

    return `
      background-color: ${Colors.blueGray["25"]};
      border-color: ${Colors.blueGray["300"]};    
    `;
  }};

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: 0 0 0 3px ${Colors.blue["200"]};
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.blue["10"]};
      border-color: ${Colors.blue["500"]};
    }
  }
`;
