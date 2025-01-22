import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const InvestorCalendar = ({
  href = "https://calendar.invest.mosreg.ru",
  target = "_blank",
  name = "Календарь",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestCalendar />
      <span>{name}</span>
    </S.Link>
  );
};
