import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const InvestorSupport = ({
  href = "https://support.invest.mosreg.ru/",
  target = "_blank",
  name = "Техподдержка",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestSupport />
      <span>{name}</span>
    </S.Link>
  );
};
