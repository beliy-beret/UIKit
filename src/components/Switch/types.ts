import { ChangeEventHandler } from "react";

export type SwitchSize = "small" | "big";

export type SwitchProps = {
  checked: boolean;
  size?: SwitchSize;
  className?: string | undefined;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean | undefined;
  value?: string | number | undefined;
  tabIndex?: number | undefined;
};
