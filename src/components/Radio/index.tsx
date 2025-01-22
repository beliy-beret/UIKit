import { forwardRef, KeyboardEvent } from "react";
import * as S from "./style";
import { RadioSizeType } from "./types.ts";

type Props = {
  value: string;
  id: string;
  checked: boolean;
  onChange?: (value: string) => void;
  name?: string;
  size?: RadioSizeType;
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
};

export const Radio = forwardRef<HTMLInputElement, Props>(
  (
    { className, id, checked, size = "small", value, onChange, ...props },
    ref,
  ) => {
    const radioHandler = () => {
      if (onChange) {
        onChange(value);
      }
    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (onChange && event.key === "Enter") {
        onChange(event.currentTarget.value);
      }
    };

    return (
      <S.Wrapper>
        <input
          className="uikit-input-radio"
          id={id}
          ref={ref}
          type="radio"
          checked={checked}
          value={value}
          {...props}
          onKeyDown={onKeyDownHandler}
          onChange={radioHandler}
        />

        <S.Box $size={size} htmlFor={id} className={className}>
          <span className="radio-marker"></span>
        </S.Box>
      </S.Wrapper>
    );
  },
);
