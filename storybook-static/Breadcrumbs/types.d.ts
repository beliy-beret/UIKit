import { HTMLAttributes, ReactElement } from '../../../node_modules/react';
export type BreadcrumbItem = {
    to: string;
    label: string;
};
export type BreadcrumbProps = Pick<HTMLAttributes<"ul">, "aria-label" | "aria-current" | "aria-selected"> & {
    list: BreadcrumbItem[];
    renderItem: (item: BreadcrumbItem) => ReactElement;
    className?: string;
};
