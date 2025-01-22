import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const Personal = ({
  href = "https://hr.invest.mosreg.ru/",
  target = "_blank",
  name = "Кадры",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestPersonal />
      <span>{name}</span>
    </S.Link>
  );
};
