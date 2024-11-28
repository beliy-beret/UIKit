import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      style={{ padding: "12px 24px", backgroundColor: "red" }}
      {...props}
    />
  );
};
