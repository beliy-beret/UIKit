import styled from "styled-components";

export const Spinner = styled.svg`
  animation: spin 1.5s infinite linear;

  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
