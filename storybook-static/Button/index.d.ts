import { ComponentProps } from '../../../node_modules/react';
import { ButtonDesign, ButtonVariant } from './types.ts';
type Props = Pick<ComponentProps<"button">, "children" | "className" | "type" | "style" | "onClick" | "onKeyDown" | "disabled"> & {
    variant?: ButtonVariant;
    design?: ButtonDesign;
};
export declare const Button: ({ children, variant, design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
