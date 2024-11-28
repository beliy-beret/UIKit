import styled from "styled-components";

type Props = {
  $isChecked?: boolean;
  $isDisabled?: boolean;
};

export const Wrapper = styled.div`
  input {
    display: none;
  }
`;

export const CheckBox = styled.label<Props>`
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition: all 200ms ease-in-out;

  ${({ $isChecked, $isDisabled }) => {
    if ($isDisabled) {
      return `
        background-color: #E2E2EB;
        border-color: #C2C0D1;
      `;
    }
    if ($isChecked) {
      return `
        background-color: #F7FAFF;
        border-color: #1B4DCB;
      `;
    }

    if ($isChecked && $isDisabled) {
      return `
        background-color: #E2E2EB;
        border-color: #C2C0D1;
      `;
    }

    return `
      background-color: #f1f0f5;
      border-color: #b0afc2;    
    `;
  }};

  @media (hover: hover) {
    &:hover {
      background-color: #f7faff;
      border-color: #193c94;
    }
  }
`;
