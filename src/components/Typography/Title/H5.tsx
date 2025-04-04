import { TitleProps } from "./types.ts";
import { H5 as Tag } from "./style.ts";

export const H5 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
