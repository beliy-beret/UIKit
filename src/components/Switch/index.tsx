import { forwardRef } from "react";
import { SwitchProps } from "./types";
import * as S from "./style";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = "small",
      id = "switch_id",
      className,
      tabIndex = 0,
      checked,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <S.Wrapper
        $size={size}
        $checked={checked}
        $disabled={disabled}
        tabIndex={disabled ? -1 : tabIndex}
        className={className}
      >
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className="uikit-switch-input"
          checked={checked}
          disabled={disabled}
          {...props}
        />

        <S.Circle></S.Circle>
      </S.Wrapper>
    );
  },
);
