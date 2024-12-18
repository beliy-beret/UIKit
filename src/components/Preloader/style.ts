import styled from "styled-components";
import { Colors } from "../colors.ts";
import { theme } from "../theme.ts";

export const Loader = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  ${theme.text.font12.regular};
  width: 93px;
  height: 100px;
  color: ${Colors.blueGray["400"]};
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
