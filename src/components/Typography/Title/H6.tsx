import { TitleProps } from "./types.ts";
import { H6 as Tag } from "./style.ts";

export const H6 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
