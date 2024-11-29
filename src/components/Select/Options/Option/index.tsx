import * as S from "./style";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  isSelected: boolean;
};

export const Option = ({ isSelected, ...props }: Props) => {
  return <S.Option {...props} $isSelected={isSelected} />;
};
