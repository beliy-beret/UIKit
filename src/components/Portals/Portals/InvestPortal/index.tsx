import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const InvestPortal = ({
  href = "https://invest.mosreg.ru/",
  target = "_blank",
  name = "Инвест.портал",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestPortal />
      <span>{name}</span>
    </S.Link>
  );
};
