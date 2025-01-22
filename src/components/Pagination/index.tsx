import * as S from "./style";
import { useMemo, useRef, useEffect, useState } from "react";
import { Button } from "../Button";

type Props = {
  totalCount: number;
  currentPage: number;
  perPage: number;
  onChangePage: (page: number) => void;
  className?: string;
  withArrow?: boolean;
};

export const Pagination = ({
  totalCount,
  perPage,
  currentPage,
  onChangePage,
  withArrow = false,
  className = "",
}: Props) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const lastPage = totalCount === 0 ? 1 : Math.ceil(totalCount / perPage);

  const resizeObserver = new ResizeObserver((entries) => {
    if (entries[0]) {
      setWidth(entries[0].contentRect.width);
    }
  });

  const pages = useMemo<Array<number[] | string> | undefined>(() => {
    const list = [...Array(lastPage + 1).keys()].slice(1);

    if (lastPage === 1) return [];

    if (width <= 380) {
      if (lastPage <= 5) return [list];

      if (currentPage <= 3) {
        return [list.slice(0, 3), "...", list.slice(-1)];
      }

      if (currentPage > lastPage - 3) {
        return [list.slice(0, 1), "...", list.slice(-3)];
      }

      if (currentPage > 3 && currentPage < lastPage - 1) {
        return [list.slice(0, 1), "...", [currentPage], "...", list.slice(-1)];
      }
    }

    if (width > 380) {
      if (lastPage <= 7) return [list];

      if (currentPage <= 3) {
        return [list.slice(0, 3), "...", list.slice(-3)];
      }

      if (currentPage > lastPage - 3) {
        return [list.slice(0, 3), "...", list.slice(-3)];
      }

      if (currentPage > 3 && currentPage < lastPage - 2) {
        return [
          list.slice(0, 1),
          "...",
          list.slice(currentPage - 2, currentPage + 1),
          "...",
          list.slice(-1),
        ];
      }
    }
  }, [currentPage, lastPage, width]);

  const onPrev = () => {
    onChangePage(currentPage - 1);
  };

  const onNext = () => {
    onChangePage(currentPage + 1);
  };

  useEffect(() => {
    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return (
    <S.Pagination
      $width={width}
      aria-label="pagination"
      className={className}
      ref={ref}
    >
      <Button
        onClick={onPrev}
        variant="Outline"
        aria-hidden={!withArrow}
        aria-label="button-prev"
        disabled={currentPage < 2}
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66602 8.49967C2.66602 8.13148 2.96449 7.83301 3.33268 7.83301H12.666C13.0342 7.83301 13.3327 8.13148 13.3327 8.49967C13.3327 8.86786 13.0342 9.16634 12.666 9.16634H3.33268C2.96449 9.16634 2.66602 8.86786 2.66602 8.49967Z"
            fill="#1B4DCB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.47075 3.36225C8.7311 3.6226 8.7311 4.04471 8.47075 4.30506L4.27549 8.50033L8.47075 12.6956C8.7311 12.9559 8.7311 13.378 8.47075 13.6384C8.2104 13.8987 7.78829 13.8987 7.52794 13.6384L2.86128 8.97173C2.60093 8.71138 2.60093 8.28927 2.86128 8.02892L7.52794 3.36225C7.78829 3.1019 8.2104 3.1019 8.47075 3.36225Z"
            fill="#1B4DCB"
          />
        </svg>
        <span>Назад</span>
      </Button>

      <S.List>
        {pages && !!pages.length && (
          <>
            {pages.map((range, index) => {
              if (typeof range === "string") {
                return (
                  <li key={`${index}`}>
                    <span className="separator">{range}</span>
                  </li>
                );
              }

              return range.map((p) => (
                <li key={`page-${p}`}>
                  <S.PaginationButton
                    aria-selected={p === currentPage}
                    onClick={() => onChangePage(p)}
                  >
                    {p}
                  </S.PaginationButton>
                </li>
              ));
            })}
          </>
        )}
      </S.List>

      <Button
        onClick={onNext}
        variant="Outline"
        aria-hidden={!withArrow}
        aria-label="button-next"
        disabled={currentPage > lastPage - 1}
      >
        <span>Вперед</span>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66699 8.50065C2.66699 8.13246 2.96547 7.83398 3.33366 7.83398H12.667C13.0352 7.83398 13.3337 8.13246 13.3337 8.50065C13.3337 8.86884 13.0352 9.16732 12.667 9.16732H3.33366C2.96547 9.16732 2.66699 8.86884 2.66699 8.50065Z"
            fill="#1B4DCB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.52827 3.36128C7.78862 3.10093 8.21073 3.10093 8.47108 3.36128L13.1377 8.02794C13.3981 8.28829 13.3981 8.7104 13.1377 8.97075L8.47108 13.6374C8.21073 13.8978 7.78862 13.8978 7.52827 13.6374C7.26792 13.3771 7.26792 12.955 7.52827 12.6946L11.7235 8.49935L7.52827 4.30409C7.26792 4.04374 7.26792 3.62163 7.52827 3.36128Z"
            fill="#1B4DCB"
          />
        </svg>
      </Button>
    </S.Pagination>
  );
};
