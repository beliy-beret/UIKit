import { TitleProps } from "./types.ts";
import { H4 as Tag } from "./style.ts";

export const H4 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
