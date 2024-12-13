import { ChangeEvent, forwardRef, KeyboardEvent } from "react";
import * as S from "./style";
import { RadioSizeType } from "./types.ts";

type Props = {
  id: string;
  onToggleChecked: (checked: boolean) => void;
  checked: boolean;
  name?: string;
  size?: RadioSizeType;
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  readOnly?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      id,
      checked,
      onToggleChecked,
      size = "small",
      ...props
    }: Props,
    ref,
  ) => {
    const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if (onToggleChecked) {
        onToggleChecked(event.currentTarget.checked);
      }
    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (onToggleChecked && event.key === "Enter") {
        onToggleChecked(!event.currentTarget.checked);
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
