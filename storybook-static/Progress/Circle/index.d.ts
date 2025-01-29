import { ProgressSize } from './types.ts';
type Props = {
    status: number;
    size?: ProgressSize;
    label?: string;
};
export declare const CircleProgress: ({ status, label, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
