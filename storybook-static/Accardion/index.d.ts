import { ReactNode, HTMLAttributes } from '../../../node_modules/react';
type Props = Pick<HTMLAttributes<"div">, "aria-label" | "aria-current" | "aria-selected"> & {
    open?: boolean;
    title: string;
    children: ReactNode | string;
    className?: string;
    id?: string;
    onClick?: () => void;
};
export declare const Accordion: ({ open, title, className, id, onClick, children, ...ariaAttr }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
