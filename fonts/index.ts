import clsx from "clsx";
import { Archivo, Work_Sans } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
const work = Work_Sans({ subsets: ["latin"] });

export const workSansFont = (classname: string) => {
  return clsx(work.className, classname);
};
export const archivoFont = (classname: string) => {
  return clsx(archivo.className, classname);
};
