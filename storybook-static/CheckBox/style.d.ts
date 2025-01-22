import { CheckBoxSizeType } from './types.ts';
type Props = {
    $isChecked?: boolean;
    $isDisabled?: boolean;
    $size: CheckBoxSizeType;
};
export declare const CheckBox: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, Props>> & string;
export declare const Wrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
