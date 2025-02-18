import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 250px;
  display: grid;
  grid-template-areas: ". T ." "L . R" ". B .";

  button {
    min-width: 100px;
  }
  .top,
  .right,
  .left,
  .bottom {
    display: flex;
    gap: 20px;
  }

  .left,
  .right {
    flex-direction: column;
  }

  .top {
    grid-area: T;
  }
  .right {
    grid-area: R;
  }
  .bottom {
    grid-area: B;
  }
  .left {
    grid-area: L;
  }
`;
export const AutoPositionWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px 40px;
  width: 100%;
  height: 90vh;
  background-color: #c6c6c6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .container {
    width: fit-content;
    height: fit-content;

    &.tl {
      grid-column: 1;
      grid-row: 1;
      place-self: start;
    }
    &.tr {
      grid-column: 2;
      grid-row: 1;
      place-self: start end;
    }
    &.br {
      grid-column: 2;
      grid-row: 2;
      place-self: end;
    }
    &.bl {
      grid-column: 1;
      grid-row: 2;
      place-self: end start;
    }
  }
`;
