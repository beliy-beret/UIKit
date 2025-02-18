import { ButtonVariant } from '../Button/types.ts';
import { ReactNode } from '../../../node_modules/react';
type Props = {
    shareUrl: string;
    className?: string;
    variant?: ButtonVariant;
    icon?: ReactNode;
};
export declare const Share: ({ shareUrl, icon, className, variant, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
