import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const InvestorWay = ({
  href = "https://pi.invest.mosreg.ru/",
  target = "_blank",
  name = "Путь инвестора",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestWay />
      <span>{name}</span>
    </S.Link>
  );
};
