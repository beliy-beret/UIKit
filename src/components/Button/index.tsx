import { ComponentProps } from "react";
import * as S from "./style";
import { ButtonDesign, ButtonVariant } from "./types.ts";

type Props = Pick<
  ComponentProps<"button">,
  | "children"
  | "type"
  | "style"
  | "onClick"
  | "onKeyDown"
  | "disabled"
  | "aria-current"
  | "aria-label"
  | "aria-selected"
> & {
  variant?: ButtonVariant;
  design?: ButtonDesign;
  className?: string;
};

export const Button = ({
  children,
  variant = "Primary",
  design = "Primary",
  ...props
}: Props) => {
  return (
    <S.Button $variant={variant} $design={design} {...props}>
      {children}
    </S.Button>
  );
};
