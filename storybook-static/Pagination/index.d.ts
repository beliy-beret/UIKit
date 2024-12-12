type Props = {
    totalCount: number;
    currentPage: number;
    perPage: number;
    onChangePage: (page: number) => void;
    className?: string;
};
export declare const Pagination: ({ totalCount, perPage, currentPage, onChangePage, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
