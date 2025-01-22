import type { ReactElement } from "react";

export type BreadcrumbItem = {
  to: string;
  label: string;
};

export type BreadcrumbProps = {
  list: BreadcrumbItem[];
  renderItem: (item: BreadcrumbItem) => ReactElement;
};
