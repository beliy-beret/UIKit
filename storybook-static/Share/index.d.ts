import { ButtonVariant } from '../Button/types.ts';
import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
type Props = Pick<HTMLAttributes<"div">, "aria-label" | "aria-current" | "aria-selected"> & {
    shareUrl: string;
    className?: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
};
export declare const Share: ({ shareUrl, icon, className, variant, ...ariaAttr }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
