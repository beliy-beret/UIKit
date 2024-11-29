import { type ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button style={{ backgroundColor: "red" }} {...props}>
      {children}
    </button>
  );
};
