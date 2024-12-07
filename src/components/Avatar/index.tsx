import * as S from "./style";

type Props = {
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
}: Props) => {
  return (
    <S.Avatar $variant={variant} className={className}>
      {imgSrc ? <img src={imgSrc} alt="" /> : <p>{userInitials}</p>}
    </S.Avatar>
  );
};
