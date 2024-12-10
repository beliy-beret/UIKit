import { ComponentProps } from "react";
import * as S from "./style";
import { ButtonDesign, ButtonVariant } from "./types.ts";

type Props = Pick<
  ComponentProps<"button">,
  | "children"
  | "className"
  | "type"
  | "style"
  | "onClick"
  | "onKeyDown"
  | "disabled"
> & {
  variant?: ButtonVariant;
  design?: ButtonDesign;
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
