import { ComponentProps } from "react";
import { StyledLink, StyledReactLink } from "./style.ts";
import { LinkDesign } from "./types.ts";
import { LinkProps } from "react-router";

type PropsA = {
  as?: "a";
  design?: LinkDesign;
} & ComponentProps<"a">;

type PropsR = {
  as?: "ReactLink";
  design?: LinkDesign;
} & LinkProps;

type Props = PropsA | PropsR;

export const Link = ({ as = "a", design = "Informative", ...props }: Props) => {
  if (as === "a") {
    return <StyledLink $design={design} {...props} />;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <StyledReactLink $design={design} {...props} />;
};
