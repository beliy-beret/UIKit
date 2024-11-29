import { forwardRef, type TextareaHTMLAttributes } from "react";
import * as S from "./style";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, tabIndex = 0, ...props }, ref) => {
    return (
      <S.Wrapper $error={error}>
        <S.TextArea {...props} tabIndex={tabIndex} $error={error} ref={ref} />
      </S.Wrapper>
    );
  },
);
