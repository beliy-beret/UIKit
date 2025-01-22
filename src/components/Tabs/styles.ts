import styled from "styled-components";
import { Colors } from "../colors";

export const Wrapper = styled.div`
  display: flex;
  width: max-content;
`;

export const TitleLink = styled.div`
  position: relative;
  color: ${Colors.blueGray["400"]};
  cursor: pointer;
  padding: 8px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    outline: none;
    width: 0;
    height: 0;
    border: none;
  }

  .line {
    position: absolute;
    display: inline-block;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${Colors.blue["500"]};
    scale: 0;
    transition: scale 250ms linear;
  }

  &[aria-selected="true"] {
    color: ${Colors.blueGray["800"]};
    .line {
      scale: 1;
    }
  }

  &:focus-within {
    box-shadow: inset 0 0 0 3px ${Colors.blue["200"]};
  }

  @media (hover: hover) {
    &:hover {
      color: ${Colors.blueGray["800"]};
    }
  }
`;
