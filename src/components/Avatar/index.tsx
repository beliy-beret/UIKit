import * as S from "./style";

type Props = {
  variant?: "Small" | "Medium" | "Large";
  imgSrc?: string;
  userInitials: string;
};

export const Avatar = ({ variant = "Medium", userInitials, imgSrc }: Props) => {
  return (
    <S.Avatar $variant={variant}>
      {imgSrc ? <img src={imgSrc} alt="" /> : <p>{userInitials}</p>}
    </S.Avatar>
  );
};
