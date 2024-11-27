import { ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={style.button} {...props} />;
};
