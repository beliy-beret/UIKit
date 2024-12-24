type Props = {
    onChangeValue: (value: string) => void;
    value: string;
    error?: boolean;
    mask?: string;
    placeholder?: string;
    disabled?: boolean;
};
export declare const InputWithMask: ({ onChangeValue, error, value, placeholder, disabled, mask, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
