import { forwardRef, ComponentProps } from "react";
import * as S from "./style";

type Props = ComponentProps<"div"> & {
  isOpen: boolean;
};

export const OptionsWrapper = forwardRef<HTMLDivElement, Props>(
  ({ isOpen = true, ...props }, ref) => {
    return (
      <S.Options $isOpen={isOpen} ref={ref}>
        <div {...props} role="listbox" className="options-wrapper" />
      </S.Options>
    );
  },
);
