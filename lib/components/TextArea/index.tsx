import { forwardRef, type TextareaHTMLAttributes } from "react";
import * as S from "./style";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.TextArea {...props} ref={ref} $error={!!errorMessage} />
        {errorMessage && (
          <S.ErrorMessage className="error-message">
            {errorMessage}
          </S.ErrorMessage>
        )}
      </S.Wrapper>
    );
  },
);
