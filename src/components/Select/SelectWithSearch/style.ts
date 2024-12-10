import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  position: relative;

  input {
    padding-right: 38px;
    width: 100%;
  }

  .reset-button {
    width: fit-content;
    position: absolute;
    display: grid;
    place-items: center;
    transition: rotate 200ms ease-in-out;
    top: 50%;
    right: 0;
    translate: 0 -18px;
    cursor: pointer;
    padding: 6px 16px;
  }
`;
