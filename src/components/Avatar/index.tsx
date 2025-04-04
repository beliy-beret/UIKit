import * as S from "./style";
import { HTMLAttributes } from "react";

type Props = Pick<
  HTMLAttributes<"div">,
  "aria-label" | "aria-current" | "aria-selected"
> & {
  className?: string;
  variant?: "Small" | "Medium" | "Large";
  imgSrc?: string;
  userInitials: string;
};

export const Avatar = ({
  variant = "Medium",
  className = "",
  userInitials,
  imgSrc,
  ...ariaAttr
}: Props) => {
  return (
    <S.Avatar $variant={variant} className={className} {...ariaAttr}>
      {imgSrc ? <img src={imgSrc} alt="" /> : <p>{userInitials}</p>}
    </S.Avatar>
  );
};
