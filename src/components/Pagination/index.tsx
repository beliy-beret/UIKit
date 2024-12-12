import * as S from "./style";
import { useMemo } from "react";

const NEIGHBOURS = 1;

function range(start: number, end: number, step = 1) {
  if (end === undefined && start !== undefined) {
    end = start;
    start = 0;
  }

  return Array(Math.ceil((end - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
}

type Props = {
  totalCount: number;
  currentPage: number;
  perPage: number;
  onChangePage: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  totalCount,
  perPage,
  currentPage,
  onChangePage,
  className = "",
}: Props) => {
  const total = totalCount === 0 ? 1 : Math.ceil(totalCount / perPage);
  const pages = useMemo(() => {
    // Total numbers: neighbours, current, first & last
    const totalNumbers = NEIGHBOURS * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (total <= totalBlocks) {
      return range(1, total + 1);
    }

    const startPage = Math.max(2, Math.min(currentPage - NEIGHBOURS, total));
    const endPage = Math.min(
      total - 1,
      Math.min(currentPage + NEIGHBOURS, total),
    );

    let p = range(startPage, endPage + 1);
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = total - endPage > 1;
    const spillOffset = totalNumbers - (p.length + 1);

    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        p = [...range(startPage - spillOffset - 1, startPage - 1), ...p];
        break;
      }

      case !hasLeftSpill && hasRightSpill: {
        p = [...p, ...range(endPage + 1, endPage + spillOffset + 1)];
        break;
      }

      default:
        break;
    }

    return p;
  }, [currentPage, total]);

  return (
    <S.Wrapper aria-label="pagination" className={className}>
      {total > 1 && (
        <ul>
          {!pages.includes(1) && (
            <li>
              <S.PaginationButton
                onClick={() => onChangePage(1)}
                aria-selected={currentPage === 1}
              >
                1
              </S.PaginationButton>
            </li>
          )}

          {!pages.includes(2) && (
            <li>
              <span>&hellip;</span>
            </li>
          )}

          {pages.map((p) => (
            <li key={`page-${p}`}>
              <S.PaginationButton
                aria-selected={p === currentPage}
                onClick={() => onChangePage(p)}
              >
                {p}
              </S.PaginationButton>
            </li>
          ))}

          {!pages.includes(total - 1) && (
            <li>
              <span>&hellip;</span>
            </li>
          )}

          {!pages.includes(total) && (
            <li>
              <S.PaginationButton
                aria-selected={currentPage === total}
                onClick={() => onChangePage(total)}
              >
                {total}
              </S.PaginationButton>
            </li>
          )}
        </ul>
      )}
    </S.Wrapper>
  );
};
