import { ReactNode } from '../../../node_modules/react';
export type UserProps = {
    userName: string;
    userRole?: string;
    userImgSrc?: string;
};
export type SideBarProps = UserProps & {
    title: string;
    children: ReactNode;
    logout: () => void;
};
export type NavItemProps = {
    to: string;
    children: ReactNode;
};
