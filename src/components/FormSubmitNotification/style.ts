import styled from "styled-components";
import { Colors } from "../colors";
import { theme } from "../theme.ts";

export const Notification = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: ${Colors.blueGray["10"]};
  max-width: 352px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  button {
    width: 100%;
    margin-top: 8px;
  }
`;

export const Title = styled.h2`
  ${theme.text.font18.medium};
  margin-block: 4px;
  text-align: center;
`;

export const Description = styled.p`
  ${theme.text.font14.regular};
  color: ${Colors.blueGray["600"]};
  text-align: center;
  margin-bottom: 8px;

  .accent {
    ${theme.text.font14.bold};
    color: ${Colors.blue["400"]};
    cursor: pointer;
  }
`;
