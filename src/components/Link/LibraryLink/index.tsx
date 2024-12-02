import { ComponentProps } from "react";
import { StyledLink } from "../style.ts";
import { LinkDesign } from "../types.ts";

type Props = {
  design?: LinkDesign;
} & ComponentProps<"a">;

export const Link = ({ design = "Informative", ...props }: Props) => {
  return <StyledLink $design={design} {...props} />;
};
