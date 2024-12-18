import styled from "styled-components";
import { Colors } from "../colors.ts";
import { theme } from "../theme.ts";

export const Title = styled.div`
  ${theme.text.font16.medium};
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  color: ${Colors.blueGray["800"]};

  svg {
    flex-shrink: 0;
    margin-left: auto;
    width: 24px;
    height: 24px;
    transition: rotate 200ms ease-in-out;
  }
`;

export const Description = styled.div`
  overflow: hidden;
  height: 0;

  p[aria-label="accordion-description"] {
    ${theme.text.font14.regular}
    padding: 4px 16px 8px;
    color: ${Colors.blueGray["500"]};
    translate: 0 -100%;
    transition: translate 200ms linear;
  }
`;

export const Accordion = styled.article`
  display: flex;
  flex-direction: column;
  transition: background-color 200ms linear;

  &[aria-expanded="true"] {
    background-color: ${Colors.blueGray["25"]};

    ${Description} {
      height: auto;

      p[aria-label="accordion-description"] {
        translate: 0 0;
      }
    }

    ${Title} {
      svg {
        rotate: 180deg;
      }
    }
  }

  @media (hover: hover) {
    &:hover:not([aria-expanded="true"]) {
      background-color: ${Colors.blueGray["25"]};
    }
  }
`;
