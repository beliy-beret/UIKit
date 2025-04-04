import { HTMLAttributes, ReactElement } from "react";

export type BreadcrumbItem = {
  to: string;
  label: string;
};

export type BreadcrumbProps = Pick<
  HTMLAttributes<"ul">,
  "aria-label" | "aria-current" | "aria-selected"
> & {
  list: BreadcrumbItem[];
  renderItem: (item: BreadcrumbItem) => ReactElement;
  className?: string;
};
