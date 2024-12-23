import { ReactNode } from '../../../node_modules/react';
type Props = {
    open?: boolean;
    title: string;
    children: ReactNode | string;
    className?: string;
    id?: string;
};
export declare const Accordion: ({ open, title, className, id, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
