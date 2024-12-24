import { ReactNode } from "react";

export type SideBarProps = {
  title: string;
  children: ReactNode;
  logout: () => void;
};

export type UserProps = {
  name: string;
  role?: string;
  imgSrc?: string;
};

export type NavItemProps = {
  to: string;
  children: ReactNode;
};
