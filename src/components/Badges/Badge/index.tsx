import { HTMLAttributes } from "react";
import { BadgeDesign } from "./types.ts";
import { StyledBadge } from "./style";

type Props = Pick<
  HTMLAttributes<"div">,
  "aria-label" | "aria-current" | "aria-selected" | "children"
> & {
  design?: BadgeDesign;
  className?: string;
};

export const Badge = ({ children, design = "Body", ...props }: Props) => {
  return (
    <StyledBadge $design={design} {...props}>
      {children}
    </StyledBadge>
  );
};
