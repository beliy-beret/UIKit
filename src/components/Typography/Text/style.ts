import styled from "styled-components";
import { Width, fontFamily, Size } from "./types.ts";

type Props = {
  $fontWidth: Width;
  $fontSize: Size;
};

export const Span = styled.span<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  line-height: ${({ $fontSize }) => {
    if (Number($fontSize) >= 36) return "126%";
    if (Number($fontSize) >= 20) return "155%";
    if (Number($fontSize) >= 18) return "150%";
    if (Number($fontSize) >= 16) return "147%";
    if (Number($fontSize) >= 14) return "135%";
    return "130%";
  }};
`;
export const Paragraph = styled.p<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  line-height: ${({ $fontSize }) => {
    if (Number($fontSize) >= 36) return "126%";
    if (Number($fontSize) >= 20) return "155%";
    if (Number($fontSize) >= 18) return "150%";
    if (Number($fontSize) >= 16) return "147%";
    if (Number($fontSize) >= 14) return "135%";
    return "130%";
  }};
`;
