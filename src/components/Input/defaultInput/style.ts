import styled from "styled-components";
import { Colors } from "../../colors.ts";
import { theme } from "../../theme.ts";

export const Input = styled.input`
  ${theme.text.font14.regular};
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${Colors.white};
  color: ${Colors.blueGray["600"]};
  outline: none;
  box-shadow: none;

  &:hover {
    border-color: ${Colors.blue["500"]};
  }

  &:focus {
    border-color: ${Colors.blueGray["300"]};
    box-shadow: 0 0 0 3px #c2b6dc;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:disabled, &:disabled&[aria-invalid="true"] {
    background-color: ${Colors.blueGray["25"]};
    border-color: ${Colors.blueGray["300"]};
    color: ${Colors.blueGray["300"]};
  }

  &[aria-invalid="true"] {
    border-color: ${Colors.red["400"]};

    &:hover {
      border-color: ${Colors.red["500"]};
    }

    &:focus {
      border-color: ${Colors.red["300"]};
      box-shadow: 0 0 0 3px #D35148};
    }
  }
`;
