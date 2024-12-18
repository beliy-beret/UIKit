import styled from "styled-components";
import { BadgeDesign } from "./types.ts";
import { ColorPalette } from "../../colors.ts";
import { theme } from "../../theme";

type Props = {
  $design: BadgeDesign;
};

export const StyledBadge = styled.div<Props>`
  ${theme.text.font12.medium};
  padding: 4px 8px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 4px;

  ${({ $design }) => `
    background-color: ${ColorPalette[$design]["10"]};
    color: ${ColorPalette[$design][$design === "Body" ? "800" : "400"]};
  `};
`;
