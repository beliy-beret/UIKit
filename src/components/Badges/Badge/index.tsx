import { ComponentProps } from "react";
import { BadgeDesign } from "./types.ts";
import { StyledBadge } from "./style";

type Props = ComponentProps<"div"> & {
  design?: BadgeDesign;
};

export const Badge = ({ children, design = "Body", ...props }: Props) => {
  return (
    <StyledBadge $design={design} {...props}>
      {children}
    </StyledBadge>
  );
};
