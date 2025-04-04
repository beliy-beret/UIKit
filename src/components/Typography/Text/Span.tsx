import { SpanProps } from "./types.ts";
import { Span as Tag } from "./style.ts";

export const Span = ({ fontSize, fontWidth, ...props }: SpanProps) => (
  <Tag $fontSize={fontSize} $fontWidth={fontWidth} {...props} />
);
