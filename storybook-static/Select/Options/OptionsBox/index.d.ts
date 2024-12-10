import { ComponentProps } from '../../../../../node_modules/react';
type Props = ComponentProps<"dialog"> & {
    isOpen: boolean;
};
export declare const OptionsBox: import('../../../../../node_modules/react').ForwardRefExoticComponent<Omit<Props, "ref"> & import('../../../../../node_modules/react').RefAttributes<HTMLDialogElement>>;
export {};
