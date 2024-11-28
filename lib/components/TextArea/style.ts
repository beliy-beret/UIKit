import styled from "styled-components";
import { Colors } from "../../../colors";

type TextAreaProps = {
  $error?: boolean;
};

export const Wrapper = styled.div<TextAreaProps>`
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  border: 1px solid ${Colors.blueGray["300"]};
  border-radius: 8px;
  overflow: hidden;
  ${({ $error }) => $error && `border-color: ${Colors.red["400"]}`};

  &:focus-within {
    border-color: ${Colors.blue["400"]};
    ${({ $error }) => $error && `border-color: ${Colors.red["400"]}`};
  }
`;

export const TextArea = styled.textarea<TextAreaProps>`
  padding: 6px 14px;
  background-color: ${Colors.white};
  color: ${Colors.blueGray["600"]};
  font-size: 14px;
  line-height: 19px;
  resize: none;
  border: none;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${Colors.blueGray["50"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${Colors.blueGray["300"]};
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: ${Colors.red["400"]};
`;
