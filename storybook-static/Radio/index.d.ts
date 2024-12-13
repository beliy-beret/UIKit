import { RadioSizeType } from './types.ts';
type Props = {
    id: string;
    onToggleChecked: (checked: boolean) => void;
    checked: boolean;
    name?: string;
    size?: RadioSizeType;
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    readOnly?: boolean;
};
export declare const Radio: import('../../../node_modules/react').ForwardRefExoticComponent<Props & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
