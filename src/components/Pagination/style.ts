import styled from "styled-components";
import { Colors } from "../colors";
import { theme } from "../theme.ts";

export const List = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  & > li {
    list-style: none;
  }

  span.separator {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
`;

export const PaginationButton = styled.button`
  ${theme.text.font14.medium};
  border: none;
  cursor: pointer;
  color: ${Colors.blueGray["800"]};
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 200px;
  display: grid;
  place-items: center;
  outline: none;

  &[aria-selected="true"] {
    background-color: ${Colors.blue["400"]};
    color: ${Colors.blue["10"]};
  }

  &:active {
    background-color: ${Colors.blue["600"]};
    color: ${Colors.blue["10"]};
  }

  &:focus-visible {
    border: 3px solid ${Colors.blue["200"]};
  }

  @media (hover: hover) {
    &:hover:not(:active, :disabled) {
      background-color: ${Colors.blue["500"]};
      color: ${Colors.blue["10"]};
    }
  }
`;

export const Pagination = styled.div<{ $width: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  ${List} {
    ${({ $width }) => ($width <= 444 ? "gap: 0;" : "gap: 12px;")};
  }

  button[aria-hidden="true"] {
    display: none;
  }

  button[aria-label="button-prev"],
  button[aria-label="button-next"] {
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
      path {
        fill: currentColor;
      }
    }

    ${({ $width }) => {
      if ($width <= 576) {
        return "padding: unset; width: 36px; height: 36px; flex: 0 0 36px; span { display: none; }";
      } else {
        return "padding: 8px 16px; flex-basis: fit-content; span { display: inline; }";
      }
    }}

  button[aria-label="button-prev"] {
    margin-right: auto;
  }

  button[aria-label="button-next"] {
    margin-left: auto;
  }
`;
