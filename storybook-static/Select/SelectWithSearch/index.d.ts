import { ReactElement } from '../../../../node_modules/react';
import { Option as OptionType } from '../types.ts';
type Props<T extends OptionType> = {
    options: T[];
    loading?: boolean;
    value: string;
    selectedValue: string;
    disabled?: boolean;
    renderOption?: (option: T) => ReactElement;
    onSelect: (optionValue: T["value"]) => void;
    onChange: (value: string) => void;
    onReset?: () => void;
    onFocus?: () => void;
};
export declare const SelectWithSearch: <T extends OptionType>({ options, value, selectedValue, loading, disabled, onReset, renderOption, onSelect, onChange, onFocus, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
