import styled from "styled-components";
import { Colors } from "../colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 410px;

  & > ul {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-inline: 12px;
    justify-content: space-between;

    & > li {
      list-style: none;
    }
  }

  @media (min-width: 904px) {
    max-width: 360px;
  }
`;

export const PaginationButton = styled.button`
  font-size: 14px;
  font-weight: 500;
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
