import styled from "styled-components";
import { Colors } from "../../colors.ts";

type InputProps = {
  $error?: boolean;
};

export const Input = styled.input<InputProps>`
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${Colors.white};
  color: ${Colors.blueGray["600"]};
  font-size: 14px;
  line-height: 19px;
  ${({ $error }) => $error && `border-color: ${Colors.red["400"]}`};
  outline: none;
  box-shadow: none;

  &:focus {
    box-shadow: 0 0 0 1px ${Colors.blue["500"]};
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
