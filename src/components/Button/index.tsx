import { type ButtonHTMLAttributes } from "react";
import * as S from "./style";
import { ButtonVariant } from "./types.ts";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = ({
  children,
  variant = "bluePrimary",
  ...props
}: Props) => {
  return (
    <S.Button $variant={variant} {...props}>
      {children}
    </S.Button>
  );
};
