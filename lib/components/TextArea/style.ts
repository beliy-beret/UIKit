import styled from "styled-components";
import { Colors } from "theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type TextAreaProps = {
  $error?: boolean;
};

export const TextArea = styled.textarea<TextAreaProps>`
  border: 1px solid #b0afc2;
  width: 100%;
  padding: 6px 14px;
  border-radius: 6px;
  background-color: ${Colors.white};
  color: ${Colors.blueGray["600"]};
  font-size: 14px;
  line-height: 19px;
  resize: none;
  ${({ $error }) => $error && `border: 1px solid ${Colors.red["400"]}`};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px #193c94;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: ${Colors.red["400"]};
`;
