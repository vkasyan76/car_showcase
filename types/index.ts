import { MouseEventHandler } from "react";

export interface CsutomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}

// export interface HeadersProps {
//   "X-RapidAPI-Key": string;
//   "X-RapidAPI-Host": string;
// }

export type HeadersProps = HeadersInit;
