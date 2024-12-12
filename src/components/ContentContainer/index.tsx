import { ComponentProps } from "react";
import { Container } from "./style";

type Props = ComponentProps<"div">;

export const ContentContainer = (props: Props) => {
  return <Container {...props} />;
};
