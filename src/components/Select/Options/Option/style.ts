import styled from "styled-components";
import { Colors } from "../../../colors.ts";

type Props = {
  $isSelected?: boolean;
};

export const Option = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #1d1c29;
  font-size: 14px;
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: #f7faff;
    color: #1b4dcb;;
  `};

  &[aria-disabled="true"] {
    background-color: transparent;
    color: ${Colors.blue["300"]} !important;
    pointer-events: none;
  }

  &[aria-selected="true"]:not(&[aria-disabled="true"]) {
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
