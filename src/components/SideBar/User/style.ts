import styled from "styled-components";
import { Colors } from "../../colors";
import { theme } from "../../theme";

export const User = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;
  ${theme.text.font14.regular};

  .user-role,
  .user-name {
    margin: 0;
  }

  .user-role {
    color: ${Colors.blueGray["500"]};
  }

  .user-name {
    ${theme.text.font14.bold};
  }
`;
