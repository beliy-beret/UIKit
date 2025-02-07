import styled from "styled-components";
import { Colors } from "../../../colors.ts";
import { theme } from "../../../theme.ts";

export const Link = styled.a`
  ${theme.text.font12.regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  line-height: 11px;
  color: ${Colors.blueGray["800"]};
  border-radius: 4px;
  transition: background-color 200ms ease-in-out;
  text-wrap: nowrap;
  cursor: pointer;
  background-color: ${Colors.blue["10"]};
  text-decoration: none;
  outline: none;

  svg {
    width: 36px;
    height: 36px;
  }

  &[aria-disabled="true"] {
    background-color: ${Colors.blueGray["25"]};
    cursor: auto;
    pointer-events: none;
    color: ${Colors.blueGray["400"]};

    svg {
      rect {
        fill: ${Colors.blueGray["500"]};
      }
    }
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${Colors.blue["200"]};
  }

  @media (hover: hover) {
    &:hover:not(:active) {
      background-color: ${Colors.blue["25"]};

      svg {
        rect {
          fill: ${Colors.blue["500"]};
        }
      }
    }
  }

  &:active {
    svg {
      rect {
        fill: ${Colors.blue["600"]};
      }
    }
  }
`;
