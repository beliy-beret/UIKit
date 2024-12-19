import { PortalLinkProps } from "../types.ts";
import { Logos } from "../../index.tsx";
import * as S from "./style.ts";

export const Export = ({
  href = "https://export.invest.mosreg.ru/",
  target = "_blank",
  name = "Экспорт",
  disabled = false,
}: PortalLinkProps) => {
  return (
    <S.Link
      href={href}
      target={target}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <Logos.InvestExport />
      <span>{name}</span>
    </S.Link>
  );
};
