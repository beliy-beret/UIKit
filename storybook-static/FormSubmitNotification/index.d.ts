import { HTMLAttributes } from '../../../node_modules/react';
type Props = Pick<HTMLAttributes<"section">, "aria-current" | "aria-label" | "aria-selected" | "className"> & {
    status: "success" | "reject";
    title?: string;
    description?: string;
    onClose: () => void;
};
export declare const FormSubmitNotification: ({ title, status, description, onClose, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
