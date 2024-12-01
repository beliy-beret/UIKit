import styled from "styled-components";
import { Colors } from "../../../colors.ts";

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${Colors.blueGray["800"]};
  font-size: 14px;
  cursor: pointer;

  &[aria-selected="true"] {
    background-color: #f7faff;
    color: #1b4dcb;
  }

  &[aria-disabled="true"] {
    background-color: transparent;
    color: ${Colors.blue["300"]} !important;
    pointer-events: none;
  }

  &[aria-current="true"]:not(&[aria-disabled="true"]) {
    color: ${Colors.blue["600"]};
    background-color: ${Colors.blueGray["25"]};
  }

  @media (hover: hover) {
    &:hover {
      color: #10338a;
      background-color: #f1f0f5;
    }
  }
`;
