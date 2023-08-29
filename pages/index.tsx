import React from "react";

import { Archivo, Work_Sans } from "next/font/google";
import { FaBars, FaXmark, FaCaretRight } from "react-icons/fa6";

const archivo = Archivo({ subsets: ["latin"] });
const work = Work_Sans({ subsets: ["latin"] });

import clsx from "clsx";
import Svaka from "@/components/Svaka";
import Lokapala from "@/components/Lokapala";
import Ksatriya from "@/components/Ksatriya";
import UpdatePost from "@/components/UpdatePost";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Header from "@/components/Header";

const workSansFont = (classname: string) => {
  return clsx(work.className, classname);
};
const archivoFont = (classname: string) => {
  return clsx(archivo.className, classname);
};

export default function Home() {
  return (
    <>
      <div className="w-100vw ">
        <Header />

        <div className="relative">
          <div className="overlay-top absolute top-0 w-full h-full"></div>

          <video
            autoPlay
            muted
            loop
            className="w-screen absolute top-0 left-0 -z-20 h-[900px] object-cover contrast-125"
          >
            <source src="/play.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Container className=" pb-12 md:h-[700px]">
          <div className="mt-40 text-center flex flex-col items-center md:items-start  md:text-left z-10 md:w-5/6">
            <h3 className="font-extrabold text-8xl uppercase drop-shadow-2xl">
              lokapala
            </h3>
            <h5
              className={archivoFont(
                "z-40 text-4xl uppercase font-extrabold mb-7"
              )}
            >
              SAGA OF THE SIX REALMS
            </h5>
            <p className={workSansFont("text-lg opacity-70 mb-48 md:w-[40%]")}>
              The battle to decide the fate of The Six Realms has begun. Who
              will emerge victorious and rewrite the future of mankind and
              beyond?
            </p>
            <div className="hidden flex gap-4 md:flex-row flex-col items-center uppercase font-extrabold text-xl">
              <p>tersedia di</p>
              <div className="flex gap-2 items-center">
                <div className="cursor-pointer ">
                  <img src="/google.png" alt="" />
                </div>
                <div className="cursor-pointer ">
                  <img src="/app-store.png" alt="" />
                </div>
              </div>
              <p>bergabung di</p>
              <div className="cursor-pointer ">
                <img src="/discord.png" alt="" />
              </div>
            </div>
          </div>
        </Container>

        <Svaka />

        <Lokapala />

        <Ksatriya />

        <UpdatePost />

        <Footer />
      </div>
    </>
  );
}
