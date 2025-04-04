import { HTMLAttributes } from '../../../../node_modules/react';
import { BadgeDesign } from './types.ts';
type Props = Pick<HTMLAttributes<"div">, "aria-label" | "aria-current" | "aria-selected" | "children"> & {
    design?: BadgeDesign;
    className?: string;
};
export declare const Badge: ({ children, design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
