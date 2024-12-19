import { ComponentProps } from '../../../node_modules/react';
import { LinkDesign } from './types.ts';
type Props = {
    design?: LinkDesign;
} & ComponentProps<"a">;
export declare const Link: ({ design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
