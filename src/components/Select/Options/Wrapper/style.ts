import styled from "styled-components";
import { Colors } from "../../../colors.ts";

type Props = {
  $isOpen: boolean;
};

export const Options = styled.div<Props>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  translate: 0 calc(100% + 4px);
  border-radius: 4px;
  box-shadow: 0 0 16px -4px rgba(142, 140, 163, 0.08);
  background-color: ${Colors.gray["10"]};
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 200ms linear;
  z-index: 10;
  overflow: hidden;

  .options-wrapper {
    margin: 0;
    max-height: 200px;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
