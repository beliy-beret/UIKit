import { ReactElement } from '../../../../node_modules/react';
import { Option as OptionType } from '../types.ts';
type Props<T extends OptionType> = {
    error?: boolean;
    options: T[];
    disabled?: boolean;
    selectedValues: string[];
    disabledValues: string[];
    renderOption?: (option: T & {
        selected: boolean;
    }) => ReactElement;
    onSelect: (optionValue: Array<T["value"]>) => void;
};
export declare const MultipleSelect: <T extends OptionType>({ options, error, selectedValues, disabledValues, disabled, renderOption, onSelect, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
