import styled from "styled-components";
import { Colors } from "../colors.ts";
import { theme } from "../theme.ts";

export const Breadcrumbs = styled.ul`
  ${theme.text.font14.regular};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  color: ${Colors.blueGray["500"]};

  li {
    position: relative;
    padding-right: 8px;
    margin-right: 8px;

    a {
      text-decoration: none;
      color: currentColor;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 4px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: ${Colors.blue["400"]};
      translate: 50% -25%;
    }

    &:last-child {
      color: ${Colors.blueGray["200"]};
      cursor: auto;
      pointer-events: none;

      &:after {
        display: none;
      }
    }
  }
`;
