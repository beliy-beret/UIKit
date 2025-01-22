import styled from "styled-components";
import { Colors } from "../colors.ts";
import { theme } from "../theme.ts";

export const Popup = styled.div`
  width: max-content;
  min-width: 202px;
  position: absolute;
  top: 0;
  right: 0;
  translate: 0 -100%;
  display: none;
  flex-direction: column;
  background-color: ${Colors.blueGray["10"]};
  border-radius: 4px;
  box-shadow: 0 8px 16px -4px #8e8ca314;
  overflow: hidden;
  opacity: 0;
  animation: 200ms show forwards ease-in-out;

  button.link {
    ${theme.text.font14.regular};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    border: none;
    text-align: start;
    height: 36px;
    padding-inline: 16px;
    background-color: ${Colors.blueGray["10"]};

    img {
      display: inline-block;
      width: 16px;
      aspect-ratio: 1;
    }

    &:hover {
      background-color: ${Colors.blueGray["25"]};
    }
  }

  &[aria-expanded="true"] {
    display: flex;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Share = styled.div`
  position: relative;
  width: fit-content;

  button.share-button {
    width: fit-content;
    background-color: inherit;
    border: none;
    cursor: pointer;

    svg {
      height: 16px;
      width: 16px;

      path {
        fill: #8e8ca3;
      }
    }

    &:focus {
      outline: unset;
    }
  }

  &:hover {
    ${Popup} {
      display: flex;
    }
  }
`;
