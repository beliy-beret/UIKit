import { ComponentProps } from '../../../../node_modules/react';
import { BadgeDesign } from './types.ts';
type Props = Pick<ComponentProps<"div">, "children" | "className"> & {
    design?: BadgeDesign;
};
export declare const Badge: ({ children, design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
