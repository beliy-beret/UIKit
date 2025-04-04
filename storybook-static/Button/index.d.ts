import { ComponentProps } from '../../../node_modules/react';
import { ButtonDesign, ButtonVariant } from './types.ts';
type Props = Pick<ComponentProps<"button">, "children" | "type" | "style" | "onClick" | "onKeyDown" | "disabled" | "aria-current" | "aria-label" | "aria-selected"> & {
    variant?: ButtonVariant;
    design?: ButtonDesign;
    className?: string;
};
export declare const Button: ({ children, variant, design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
