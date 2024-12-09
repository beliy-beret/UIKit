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
    color: ${Colors.blueGray["300"]} !important;
    cursor: auto;
  }

  &[aria-current="true"]:not(&[aria-disabled="true"]) {
    color: ${Colors.blue["600"]};
    background-color: ${Colors.blueGray["25"]};
  }

  @media (hover: hover) {
    &:hover:not([aria-disabled="true"]) {
      color: ${Colors.blue["600"]};
      background-color: ${Colors.blueGray["25"]};
    }
  }
`;
