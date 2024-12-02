import { type ButtonHTMLAttributes } from "react";
import * as S from "./style";
import { ButtonDesign, ButtonVariant } from "./types.ts";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
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
