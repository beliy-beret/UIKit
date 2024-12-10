import { ReactNode, CSSProperties } from '../../../node_modules/react';
type Props = {
    children?: ReactNode;
    onClose?: () => void;
    style?: CSSProperties;
    wrapperStyle?: CSSProperties;
};
export declare const Modal: ({ children, onClose, style, wrapperStyle }: Props) => import('../../../node_modules/react').ReactPortal;
export {};
