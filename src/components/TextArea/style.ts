import styled from "styled-components";
import { Colors } from "../colors";

export const Wrapper = styled.div`
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  border: 1px solid ${Colors.blueGray["300"]};
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    border-color: ${Colors.blue["500"]};
  }

  &:focus-within {
    border-color: ${Colors.blueGray["300"]};
    box-shadow: 0 0 0 3px #c2b6dc;
  }

  &[aria-disabled="true"],
  &[aria-disabled="true"]&[aria-invalid="true"] {
    background-color: ${Colors.blueGray["25"]};
    border-color: ${Colors.blueGray["300"]};
    color: ${Colors.blueGray["300"]};
  }

  &[aria-invalid="true"] {
    border-color: ${Colors.red["400"]};

    &:hover {
      border-color: ${Colors.red["500"]};
    }

    &:focus-within {
      border-color: ${Colors.red["300"]};
      box-shadow: 0 0 0 3px #D35148};  
    }
  }
`;

export const TextArea = styled.textarea`
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
