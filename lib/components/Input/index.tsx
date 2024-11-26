import { InputHTMLAttributes } from "react";
import style from "./style.module.css";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={style.input} {...props} />;
};
