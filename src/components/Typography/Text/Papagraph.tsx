import { ParagraphProps } from "./types.ts";
import { Paragraph as Tag } from "./style.ts";

export const Paragraph = ({
  fontSize,
  fontWidth,
  ...props
}: ParagraphProps) => (
  <Tag $fontSize={fontSize} $fontWidth={fontWidth} {...props} />
);
