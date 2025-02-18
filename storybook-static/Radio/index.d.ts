import { RadioSizeType } from './types.ts';
type Props = {
    value: string;
    id: string;
    checked: boolean;
    onChange?: (value: string) => void;
    name?: string;
    size?: RadioSizeType;
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
};
export declare const Radio: import('../../../node_modules/react').ForwardRefExoticComponent<Props & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
