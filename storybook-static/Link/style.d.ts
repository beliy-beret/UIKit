import { LinkDesign } from './types.ts';
type Props = {
    $design: LinkDesign;
};
export declare const StyledLink: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, Props>> & string;
export declare const StyledReactLink: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('react-router').LinkProps & import('../../../node_modules/react').RefAttributes<HTMLAnchorElement>, "ref"> & {
    ref?: ((instance: HTMLAnchorElement | null) => void | import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../node_modules/react').RefObject<HTMLAnchorElement> | null | undefined;
}, Props>> & string & Omit<import('../../../node_modules/react').ForwardRefExoticComponent<import('react-router').LinkProps & import('../../../node_modules/react').RefAttributes<HTMLAnchorElement>>, keyof import('../../../node_modules/react').Component<any, {}, any>>;
export {};
