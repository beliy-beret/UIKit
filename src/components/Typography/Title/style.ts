import styled from "styled-components";
import { Width, fontFamily } from "./types.ts";

type Props = {
  $fontWidth: Width;
};

export const H1 = styled.h1<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 72px;
  line-height: 120%;
`;
export const H2 = styled.h2<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 60px;
  line-height: 120%;
`;
export const H3 = styled.h3<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 36px;
  line-height: 126%;
`;
export const H4 = styled.h4<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 30px;
  line-height: 128%;
`;
export const H5 = styled.h5<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 24px;
  line-height: 128%;
`;
export const H6 = styled.h6<Props>`
  font-weight: 400;
  font-family: ${({ $fontWidth }) => fontFamily[$fontWidth]}, sans-serif;
  font-size: 20px;
  line-height: 128%;
`;
