import styled from "styled-components";
import { ProgressSize } from "./types.ts";
import { Colors } from "../../colors.ts";
import { theme } from "../../theme.ts";

type Props = {
  $status: number;
  $size: ProgressSize;
};

export const Chart = styled.div<Props>`
  * {
    padding: 0;
    margin: 0;
  }

  box-sizing: border-box;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $status }) => `
    conic-gradient(
      ${Colors.blue["400"]} 0 ${$status}%,
      ${Colors.blueGray["25"]} ${$status}%
    )
  `};

  ${({ $size }) => {
    if ($size === "xxs") {
      return "width: 64px; padding: 6px;";
    }
    if ($size === "xs") {
      return "width: 160px; padding: 16px;";
    }
    if ($size === "sm") {
      return "width: 200px; padding: 20px;";
    }
    if ($size === "md") {
      return "width: 240px; padding: 24px;";
    }
    return "width: 280px; padding: 28px;";
  }};

  div.progress-info {
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;

    p.progress-label {
      color: ${Colors.blueGray["400"]};
      display: ${({ $size }) => ($size === "xxs" ? "none" : "block")};
      ${() => theme.text.font12.medium};
    }

    p.progress-status {
      color: ${Colors.blueGray["800"]};

      ${({ $size }) => {
        if ($size === "xxs") return theme.text.font14.bold;
        if ($size === "xs") return theme.header.font24.bold;
        if ($size === "sm") return theme.header.font30.bold;
        if ($size === "md") return theme.header.font36.bold;

        return theme.header.font60.bold;
      }};
    }
  }
`;
