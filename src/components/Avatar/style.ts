import styled from "styled-components";

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

  ${({ $variant }) => $variant === "Small" && "width: 28px;"}
  ${({ $variant }) => $variant === "Medium" && "width: 40px;"}
  ${({ $variant }) => $variant === "Large" && "width: 80px;"}
  
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin: 0;
    ${({ $variant }) => $variant === "Small" && "font-size: 12px;"}
    ${({ $variant }) => $variant === "Medium" && "font-size: 20px;"}
    ${({ $variant }) => $variant === "Large" && "font-size: 38px;"}
  }
`;
