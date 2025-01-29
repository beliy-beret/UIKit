import styled from "styled-components";
import { Colors } from "../../colors.ts";

export const Track = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center start;
  width: 100%;
  height: 8px;
  border-radius: 21px;
  overflow: hidden;
  background-color: ${Colors.blueGray["25"]};
`;

export const Progress = styled.div<{ $status: number }>`
  width: ${({ $status }) => `${$status}%`};
  height: 100%;
  border-radius: 21px;
  background-color: ${Colors.blue["400"]};
`;
