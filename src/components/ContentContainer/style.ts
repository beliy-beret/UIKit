import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 10px;
  margin-inline: auto;
  max-width: 1366px;

  @media (min-width: 1024px) {
    padding-inline: 20px;
  }

  @media (min-width: 1406px) {
    padding-inline: 0;
  }
`;