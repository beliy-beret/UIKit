import { forwardRef, type TextareaHTMLAttributes } from "react";
import * as S from "./style";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, disabled, ...props }, ref) => {
    return (
      <S.Wrapper aria-invalid={error} aria-disabled={disabled}>
        <S.TextArea {...props} disabled={disabled} ref={ref} />
      </S.Wrapper>
    );
  },
);
