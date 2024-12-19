import styled from "styled-components";

export const PortalList = styled.div`
  width: 266px;
  position: absolute;
  bottom: -6px;
  right: 0;
  translate: 0 100%;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px -4px rgba(142, 140, 163, 0.08);
  padding: 24px;
  animation: show 300ms ease-in-out forwards;

  &:after {
    position: absolute;
    top: -6px;
    right: 12px;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ffffff;
  }
`;

export const PortalsBox = styled.div`
  width: fit-content;
  position: relative;

  button {
    padding: unset;
    aspect-ratio: 1;
    width: 36px;
  }
`;
