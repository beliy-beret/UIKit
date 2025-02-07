import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const IndustrialParks = ({
  href = "https://invest.mosreg.ru/",
  target = "_blank",
  name = "Рейтинг индустриальных парков",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.IndustrialParks />
      <span>{name}</span>
    </S.Link>
  );
};
