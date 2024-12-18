import styled from "styled-components";
import { theme } from "../theme";

type AvatarProps = {
  $variant: "Small" | "Medium" | "Large";
};

export const Avatar = styled.div<AvatarProps>`
  display: grid;
  place-items: center;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: #1b4dcb;
  color: #f7faff;
  overflow: hidden;

  ${({ $variant }) => $variant === "Small" && "width: 16px;"}
  ${({ $variant }) => $variant === "Medium" && "width: 40px;"}
  ${({ $variant }) => $variant === "Large" && "width: 80px;"}
  
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin: 0;
    ${({ $variant }) =>
      $variant === "Small" &&
      `${theme.text.font12.semibold}; translate: 0 2px`};
    ${({ $variant }) => $variant === "Medium" && theme.text.font20.semibold};
    ${({ $variant }) =>
      $variant === "Large" &&
      `${theme.header.font36.semibold}; font-size: 38px`};
  }
`;
