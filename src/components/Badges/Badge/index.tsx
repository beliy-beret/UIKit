import { ComponentProps } from "react";
import { BadgeDesign } from "./types.ts";
import { StyledBadge } from "./style";

type Props = Pick<ComponentProps<"div">, "children" | "className"> & {
  design?: BadgeDesign;
};

export const Badge = ({ children, design = "Body", ...props }: Props) => {
  return (
    <StyledBadge $design={design} {...props}>
      {children}
    </StyledBadge>
  );
};
