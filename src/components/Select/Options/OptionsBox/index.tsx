import { forwardRef, ComponentProps } from "react";
import * as S from "./style";

type Props = ComponentProps<"dialog"> & {
  isOpen: boolean;
};

export const OptionsBox = forwardRef<HTMLDialogElement, Props>(
  ({ isOpen, ...props }, ref) => {
    return (
      <S.Options
        ref={ref}
        role="listbox"
        className="options-wrapper"
        open={isOpen}
        aria-modal={!isOpen}
        {...props}
      />
    );
  },
);
