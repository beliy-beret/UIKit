import styled from "styled-components";
import { Colors } from "theme.ts";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px 0;
  margin-bottom: 6px;

  span {
    ${({ theme }) => theme.text.font14.bold};
    flex: 1;
    text-transform: capitalize;
  }

  button {
    cursor: pointer;
    width: 24px;
    aspect-ratio: 1;
    padding: 0;
    display: grid;
    place-items: center;
    border: none;
    background-color: transparent;

    &[aria-label="next"] {
      transform: rotate(180deg);
    }

    &:disabled {
      cursor: auto;
      svg {
        path {
          fill: ${Colors.blueGray["200"]};
        }
      }
    }
  }
`;
