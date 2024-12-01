import styled from "styled-components";
import { Colors } from "../../../colors.ts";

export const Options = styled.dialog`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 16px -4px rgba(142, 140, 163, 0.08);
  background-color: ${Colors.gray["10"]};
  overflow-y: auto;
  max-height: 200px;
  padding: 0;
  bottom: 0;
  translate: 0 100%;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${Colors.blueGray["50"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${Colors.blueGray["300"]};
  }

  &[open] {
    animation: open 400ms forwards;
    display: flex;
    flex-direction: column;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
