import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNiceNumber = (num: number|string) => {
  if (typeof num === "string") {
    num = parseFloat(num);
  }

  num = num.toFixed(4);

  return num.toString();
};
