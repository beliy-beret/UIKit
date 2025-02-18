import { ReactElement } from '../../../node_modules/react';
export type Tab = {
    value: string;
    label: string;
};
type Props<T extends Tab> = {
    list: T[];
    selectedTab: T;
    onSelect: (tab: T) => void;
    className?: string;
    renderTab?: (tab: T) => ReactElement;
};
export declare const Tabs: <T extends Tab>({ list, selectedTab, onSelect, renderTab, className, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
