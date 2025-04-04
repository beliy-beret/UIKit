import { HTMLAttributes } from '../../../node_modules/react';
type Props = Pick<HTMLAttributes<"div">, "aria-label" | "aria-current" | "aria-selected"> & {
    className?: string;
    variant?: "Small" | "Medium" | "Large";
    imgSrc?: string;
    userInitials: string;
};
export declare const Avatar: ({ variant, className, userInitials, imgSrc, ...ariaAttr }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
