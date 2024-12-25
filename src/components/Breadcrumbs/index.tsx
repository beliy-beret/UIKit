import * as S from "./style";
import { BreadcrumbProps } from "./types.ts";

export const Breadcrumbs = ({ list, renderItem }: BreadcrumbProps) => {
  return (
    <S.Breadcrumbs>
      {list.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </S.Breadcrumbs>
  );
};
