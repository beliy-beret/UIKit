import styled from "styled-components";
import { Colors } from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  position: relative;

  .reset-button {
    width: fit-content;
    height: 30px;
    padding-inline: 16px;
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 1;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    translate: 0 -50%;
  }
`;

export const Options = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translateY(calc(100% + 8px));
  width: 100%;
  overflow-y: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 0 16px -4px rgba(142, 140, 163, 0.08);
  background-color: ${Colors.gray["10"]};
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${Colors.blueGray["50"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${Colors.blueGray["300"]};
  }
`;

export const Option = styled.li<{ $isSelected?: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #1d1c29;
  font-size: 14px;
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: ${Colors.blue["10"]};
    color: ${Colors.blue["400"]};
  `};

  &[aria-selected="true"] {
    color: ${Colors.blue["600"]};
    background-color: ${Colors.blueGray["25"]};
  }

  @media (hover: hover) {
    &:hover {
      color: ${Colors.blue["600"]};
      background-color: ${Colors.blueGray["25"]};
    }
  }
`;
