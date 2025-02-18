import { ReactElement } from '../../../../node_modules/react';
import { Option as OptionType } from '../types.ts';
type Props<T extends OptionType> = {
    error?: boolean;
    options: T[];
    selectedValue: string;
    disabled?: boolean;
    renderOption?: (option: T) => ReactElement;
    onSelect: (optionValue: T["value"]) => void;
};
export declare const Select: <T extends OptionType>({ options, error, selectedValue, disabled, renderOption, onSelect, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
