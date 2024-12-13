import styled from "styled-components";
import { Colors } from "../colors.ts";

export const Loader = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  width: 93px;
  height: 100px;
  font-size: 12px;
  color: ${Colors.blueGray["400"]};
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
