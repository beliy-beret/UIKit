import { TitleProps } from "./types.ts";
import { H2 as Tag } from "./style.ts";

export const H2 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
