import * as S from "./style";
import { BreadcrumbProps } from "./types.ts";

export const Breadcrumbs = ({
  list,
  renderItem,
  className,
  ...ariaAttr
}: BreadcrumbProps) => {
  return (
    <S.Breadcrumbs {...ariaAttr} className={className}>
      {list.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </S.Breadcrumbs>
  );
};
