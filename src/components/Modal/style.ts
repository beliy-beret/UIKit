import styled from "styled-components";

type Props = {
  $transparent: boolean;
};

export const Modal = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${({ $transparent }) =>
    $transparent ? "transparent" : "rgba(41, 39, 62, 0.7)"};
  z-index: 1000;
`;
