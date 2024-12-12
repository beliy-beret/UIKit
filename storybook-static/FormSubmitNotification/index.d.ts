type Props = {
    status: "success" | "reject";
    title?: string;
    description?: string;
    onClose: () => void;
};
export declare const FormSubmitNotification: ({ title, status, description, onClose, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
