import styled from "styled-components";
import { Colors } from "../colors";

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
  font-size: 18px;
  font-weight: 500;
  margin-block: 4px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${Colors.blueGray["600"]};
  text-align: center;
  margin-bottom: 8px;

  .accent {
    font-size: 14px;
    font-weight: 700;
    color: ${Colors.blue["400"]};
    cursor: pointer;
  }
`;
