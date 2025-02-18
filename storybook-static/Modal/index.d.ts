import { CSSProperties, ComponentProps } from '../../../node_modules/react';
type Props = Pick<ComponentProps<"div">, "style" | "children"> & {
    transparent?: boolean;
    onClose?: () => void;
    wrapperStyle?: CSSProperties;
};
export declare const Modal: ({ children, onClose, style, wrapperStyle, transparent, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
