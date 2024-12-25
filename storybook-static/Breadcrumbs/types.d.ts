import { ReactElement } from '../../../node_modules/react';
export type BreadcrumbItem = {
    to: string;
    label: string;
};
export type BreadcrumbProps = {
    list: BreadcrumbItem[];
    renderItem: (item: BreadcrumbItem) => ReactElement;
};
