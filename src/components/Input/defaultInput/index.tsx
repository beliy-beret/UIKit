import { type InputHTMLAttributes, forwardRef } from "react";
import * as S from "./style.ts";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, ...props }, ref) => {
    return <S.Input {...props} ref={ref} $error={error} />;
  },
);
