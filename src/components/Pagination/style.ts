import styled from "styled-components";
import { Colors } from "../colors";
import { theme } from "../theme.ts";

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  button[aria-hidden="true"] {
    display: none;
  }

  button[aria-label="button-prev"],
  button[aria-label="button-next"] {
    gap: 8px;

    svg {
      path {
        fill: currentColor;
      }
    }
  }

  button[aria-label="button-prev"] {
    margin-right: auto;
  }

  button[aria-label="button-next"] {
    margin-left: auto;
  }
`;

export const List = styled.ul`
  max-width: 410px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  & > li {
    list-style: none;
  }

  @media (min-width: 904px) {
    max-width: 360px;
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
