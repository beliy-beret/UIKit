import styled from "styled-components";
import { User } from "./User/style.ts";
import { theme } from "../theme.ts";

export const Sidebar = styled.div`
  background-color: #ffffff;
  padding: 24px;
  width: max-content;
  border-radius: 12px;

  button {
    width: 100%;
    margin-top: 8px;
    align-items: unset;
    justify-content: start;
    gap: 8px;
    background-color: #ffffff;

    svg {
      path {
        fill: currentColor;
      }
    }

    ${theme.text.font14.medium};
  }

  .sidebar-title {
    ${theme.header.font20.bold};
  }

  .link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 4px;
    color: #8e8ca3;
    text-decoration: none;

    svg {
      width: 16px;
      height: 17px;
    }

    &.active {
      background-color: #f1f0f5;
      color: #515066;
    }

    @media (hover: hover) {
      &:hover:not(.active) {
        background-color: #fbfbfb;
      }
    }
  }

  ${User} {
    margin-top: 16px;
    margin-bottom: 12px;
  }
`;
