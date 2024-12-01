import * as S from "./style";
import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export const Option = (props: Props) => {
  return <S.Option {...props} />;
};
