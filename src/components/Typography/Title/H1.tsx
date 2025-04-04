import { TitleProps } from "./types.ts";
import { H1 as Tag } from "./style.ts";

export const H1 = ({ children, fontWidth, ...props }: TitleProps) => (
  <Tag $fontWidth={fontWidth} {...props}>
    {children}
  </Tag>
);
