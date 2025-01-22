import styled from "styled-components";
import { Colors } from "../../colors";
import { theme } from "../../theme";

export const User = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;
  border-bottom: 1px solid ${Colors.blueGray["100"]};
  ${theme.text.font14.regular};

  .user-role,
  .user-name {
    margin: 0;
  }

  .user-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-role {
    color: ${Colors.blueGray["500"]};
  }

  .user-name {
    ${theme.text.font14.bold};
  }
`;
