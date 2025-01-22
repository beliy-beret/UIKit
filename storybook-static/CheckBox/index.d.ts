import { CheckBoxSizeType } from './types.ts';
type Props1 = {
    id: string;
    onToggleChecked: (checked: boolean) => void;
    checked: boolean;
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    size?: CheckBoxSizeType;
};
type Props2 = {
    checked?: boolean;
    readOnly: boolean;
    id?: string;
    className?: string;
    onToggleChecked?: (checked: boolean) => void;
    disabled?: boolean;
    tabIndex?: number;
    size?: CheckBoxSizeType;
};
type Props = Props1 | Props2;
export declare const CheckBox: import('../../../node_modules/react').ForwardRefExoticComponent<Props & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
