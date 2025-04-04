import { TitleProps } from "./types.ts";
import { H3 as Tag } from "./style.ts";

export const H3 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
