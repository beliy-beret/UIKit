type Props = {
    totalCount: number;
    currentPage: number;
    perPage: number;
    onChangePage: (page: number) => void;
    className?: string;
    withArrow?: boolean;
};
export declare const Pagination: ({ totalCount, perPage, currentPage, onChangePage, withArrow, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
