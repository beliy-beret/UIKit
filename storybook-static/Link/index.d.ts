import { ComponentProps } from '../../../node_modules/react';
import { LinkDesign } from './types.ts';
import { LinkProps } from 'react-router';
type PropsA = {
    as?: "a";
    design?: LinkDesign;
} & ComponentProps<"a">;
type PropsR = {
    as?: "ReactLink";
    design?: LinkDesign;
} & LinkProps;
type Props = PropsA | PropsR;
export declare const Link: ({ as, design, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
