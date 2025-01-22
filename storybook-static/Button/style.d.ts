import { ButtonDesign, ButtonVariant } from './types.ts';
type ButtonProps = {
    $variant: ButtonVariant;
    $design: ButtonDesign;
};
export declare const Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps>> & string;
export {};
