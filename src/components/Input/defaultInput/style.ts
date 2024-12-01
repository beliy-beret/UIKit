import styled from "styled-components";
import { Colors } from "../../colors.ts";

type InputProps = {
  $error?: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${Colors.white};
  color: ${Colors.blueGray["600"]};
  font-size: 14px;
  line-height: 19px;
  ${({ $error }) => $error && `border: 1px solid ${Colors.red["400"]}`};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${Colors.blue["500"]};
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
