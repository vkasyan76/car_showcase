import { MouseEventHandler } from "react";


export interface CsutomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement;
  btnType?: "button" | "submit"
  >;
}