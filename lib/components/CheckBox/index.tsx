import { forwardRef, ComponentProps } from "react";
import * as S from "./style";

type Props = Pick<
  ComponentProps<"input">,
  "id" | "className" | "checked" | "disabled" | "onChange" | "readOnly"
>;

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ checked, disabled, onChange, className, id, readOnly }: Props, ref) => {
    return (
      <S.Wrapper>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          readOnly={readOnly}
        />
        <S.CheckBox
          htmlFor={id}
          className={className}
          $isChecked={checked}
          $isDisabled={disabled}
        >
          {checked && (
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42836 0.769651C8.78789 0.410116 9.37081 0.410116 9.73035 0.769651C10.0855 1.12478 10.0898 1.69784 9.74341 2.05831L4.84287 8.184C4.8358 8.19284 4.82824 8.20128 4.82023 8.20929C4.4607 8.56882 3.87778 8.56882 3.51824 8.20929L0.269651 4.9607C-0.0898838 4.60116 -0.0898837 4.01824 0.269651 3.65871C0.629186 3.29917 1.21211 3.29917 1.57164 3.65871L4.1415 6.22856L8.40394 0.797191C8.41152 0.78753 8.41967 0.778334 8.42836 0.769651Z"
                fill={disabled ? "#C2C0D1" : "#1B4DCB"}
              />
            </svg>
          )}
        </S.CheckBox>
      </S.Wrapper>
    );
  },
);