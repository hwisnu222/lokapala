import React from "react";
import Image from "next/image";
import { Archivo, Work_Sans } from "next/font/google";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const archivo = Archivo({ subsets: ["latin"] });
const work = Work_Sans({ subsets: ["latin"] });

import Logo from "@/assets/logo.png";
import LokapalaLogo from "@/assets/lokapala-logo.png";
import clsx from "clsx";

const workSansFont = (classname: string) => {
  return clsx(work.className, classname);
};
const archivoFont = (classname: string) => {
  return clsx(archivo.className, classname);
};

const Container = (props: any) => {
  return (
    <div
      {...props}
      className={`container mx-auto px-10 md:px-20 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default function Home() {
  const [drawer, setDrawer] = React.useState(false);
  const [sideMenu, setSideMenu] = React.useState(false);
  const [bottomMenu, setBottomMenu] = React.useState(false);

  const handleDrawer = () => {
    setDrawer((prev: boolean) => !prev);
  };

  const handleSideMenu = () => {
    setSideMenu((prev: boolean) => !prev);
  };

  const handleBottomMenu = () => {
    setBottomMenu((prev: boolean) => !prev);
  };
  return (
    <>
      {/* bottom menu mobile */}
      <div className="bottom-menu mx-4 rounded-full z-30 fixed bottom-2 md:hidden flex border-b-2 border-orange-500 bg-gray-950">
        <div
          className="rounded-full bg-white p-4 flex justify-center items-center"
          onClick={handleBottomMenu}
        >
          <FaArrowRight
            className={`text-6xl text-orange-500 ${
              bottomMenu ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div
          className={`bottom-menu flex items-center gap-2  overflow-x-hidden ${
            bottomMenu ? " w-0" : "w-full"
          }`}
        >
          <div className="flex justify-between gap-4 ml-2">
            <div className="icon-wrap">
              <img src="/icon-social/facebook.png" alt="" />
            </div>
            <div className="icon-wrap">
              <img src="/icon-social/instagram.png" alt="" />
            </div>
            <div className="icon-wrap">
              <img src="/icon-social/youtube.png" alt="" />
            </div>
          </div>
          <img src="/google.png" alt="" className="w-auto mr-8" />
        </div>
      </div>
      {/* Side Menu */}
      <div
        className={`side-menu hidden md:flex fixed  items-center right-4 translate-y-[40%] z-[100] ${
          sideMenu ? "" : "-mr-[250px]"
        }`}
      >
        <div
          className="arrow-side-menu cursor-pointer animate-pulse"
          onClick={handleSideMenu}
        ></div>
        <div className=" p-8   bg-gray-950  inline-block border-2 border-orange-500 rounded-sm">
          <div className="flex flex-col items-center gap-4">
            <h3 className="uppercase text-center font-extrabold">play now</h3>
            <img src="/qrcode.png" alt="" className="w-32 h-32" />

            <img src="/google.png" alt="" />
            <img src="/app-store.png" alt="" />
            <div className="flex justify-between gap-4">
              <div className="icon-wrap">
                <img src="/icon-social/facebook.png" alt="" />
              </div>
              <div className="icon-wrap">
                <img src="/icon-social/instagram.png" alt="" />
              </div>
              <div className="icon-wrap">
                <img src="/icon-social/youtube.png" alt="" />
              </div>
            </div>

            <img src="/discord.png" alt="" />
          </div>
        </div>
      </div>
      <main className="w-100vw ">
        {/* header desktop */}
        <header className="hidden md:block py-4 bg-gray-950 sticky top-0 z-50 shadow-md">
          <Container className="flex justify-between items-center">
            <h3>
              <Image src={Logo} fill={false} width={200} alt="logo" />
            </h3>
            <ul className="flex justify-between items-center gap-16 font-extrabold uppercase">
              <li className="border-b-2 border-transparent hover:border-b-orange-500 py-2 ">
                Game
              </li>
              <li className="border-b-2 border-transparent hover:border-b-orange-500 py-2">
                ksatriya
              </li>
              <li className="border-b-2 border-transparent hover:border-b-orange-500 py-2">
                news
              </li>
              <li className="border-b-2 border-transparent hover:border-b-orange-500 py-2">
                support
              </li>
            </ul>
          </Container>
        </header>

        {/* header mobile */}
        <header className="bg-gray-950  md:hidden sticky top-0 z-30">
          <Container className="flex justify-between items-center">
            <div></div>
            <h3>
              <Image src={LokapalaLogo} fill={false} height={80} alt="logo" />
            </h3>
            <div>
              <FaBars
                className="text-4xl text-orange-400 cursor-pointer"
                onClick={handleDrawer}
              />
            </div>
          </Container>
        </header>
        {/* drawer */}
        <div
          className={`md:hidden block drawer fixed top-0 right-0  w-5/6 bg-gray-950 z-[100] p-14 border border-orange-500 m-2 ${
            drawer ? "" : "-mr-[100%]"
          }`}
        >
          <FaXmark
            className="text-5xl absolute top-4 right-4 cursor-pointer"
            onClick={handleDrawer}
          />
          <div className="flex justify-center items-center mb-8">
            <Image src={LokapalaLogo} fill={false} height={90} alt="logo" />
          </div>
          <ul className="flex flex-col items-end gap-8 ">
            <li className="font-extrabold text-2xl uppercase hover:text-orange-500">
              Updated
            </li>
            <li className="font-extrabold text-2xl uppercase hover:text-orange-500">
              game
            </li>
            <li className="font-extrabold text-2xl uppercase hover:text-orange-500">
              ksatriya
            </li>
            <li className="font-extrabold text-2xl uppercase hover:text-orange-500">
              events
            </li>
            <li className="font-extrabold text-2xl uppercase hover:text-orange-500">
              supports
            </li>
          </ul>
        </div>

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
          <div className="mt-20 text-center flex flex-col items-center md:items-start  md:text-left z-10 md:w-5/6">
            <h3 className="font-extrabold text-8xl uppercase drop-shadow-2xl">
              lokapala
            </h3>
            <h5
              className={archivoFont("text-4xl uppercase font-extrabold mb-7")}
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

        {/* image */}
        <div></div>
        <div className="part-1 pb-32 bg-cover object-cover w-full">
          <Container className="grid md:grid-cols-3 gap-4 mb-20">
            {Array.from({ length: 3 }).map((_, index: number) => (
              <div
                key={index}
                className="p-[2px] bg-gray-500 hover:bg-orange-500 font-medium event-slide-border cursor-pointer relative"
              >
                <div className="event-slide relative">
                  <div className="absolute right-2 top-2 text-white  bg-orange-500 px-5 border border-gray-300 rounded-sm">
                    Event
                  </div>
                  <img src="/thumbnail/event-slide.png" alt="" />
                  <div className="absolute bottom-8 left-8 ">
                    <p>May 8, 2022 // Events</p>
                    <h3 className="font-extrabold text-2xl uppercase ">
                      hello
                    </h3>
                    <p className="hidden event-desc w-10/12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis, dolor?
                    </p>
                  </div>
                </div>
                <div className="overlay-slide hidden absolute z-10 top-0 left-0 h-full w-full"></div>
              </div>
            ))}
          </Container>
          <Container className=" grid md:grid-cols-2 items-center  gap-6">
            <div className="flex justify-center flex-col">
              <h3
                className={archivoFont(
                  "uppercase font-extrabold text-7xl mb-6"
                )}
              >
                WELCOME TO SVAKA LOKAPALA!
              </h3>
              <p className={workSansFont("md:w-3/4")}>
                Be the chosen Ksatriya and decide the fate of the realms!
                Experience the first MOBA in South East Asia: Lokapala!
                Developed by Indonesian game developer, Anantarupa Studios.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-4 frame-youtube w-full">
                <iframe
                  className="h-[400px]"
                  title="YouTube video player"
                  width="100%"
                  height="900px"
                  src="https://www.youtube.com/embed/OlX4gHZ4Nw8"
                  id="widget"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>

        <div className="part-2 relative bg-left md:bg-center  md:object-cover width-full md:-mt-[70px]">
          {/* <div className="overlay-right absolute top-0 w-full h-full"></div> */}
          <Container className="grid md:grid-cols-2 gap-6  h-full">
            <div></div>
            <div className="flex justify-center pb-16 pt-44 flex-col items-start z-20">
              <h3
                className={archivoFont(
                  "uppercase font-extrabold text-7xl mb-6"
                )}
              >
                what is lokapala?
              </h3>
              <p className={workSansFont("mb-8")}>
                Be the chosen Ksatriya and decide the fate of the realms!
                Experience the first MOBA in South East Asia: Lokapala!
                Developed by Indonesian game developer, Anantarupa Studios.
              </p>
              <button className="uppercase">what&apos;s more</button>
            </div>
          </Container>
        </div>

        <div className="part-3  relative mt-2 md:bg-center bg-right md:bg-no-repeat object-cover  w-full">
          <div className="overlay-left absolute top-0 w-full h-full"></div>
          <Container className="grid md:grid-cols-2 py-20 ">
            <div className="flex justify-center flex-col items-start z-10">
              <h3
                className={archivoFont(
                  "uppercase font-extrabold text-7xl mb-6 "
                )}
              >
                FIND OUT ABOUT KSATRIYA!
              </h3>
              <p className={workSansFont("mb-8")}>
                Be the chosen Ksatriya and decide the fate of the realms!
                Experience the first MOBA in South East Asia: Lokapala!
                Developed by Indonesian game developer, Anantarupa Studios.
              </p>
              <button className="uppercase">what&apos;s more</button>
            </div>
            <div></div>
          </Container>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              className="news hover:border-orange-500 border my-2"
              key={index}
            >
              <div className="overflow-hidden">
                <img
                  src="/thumbnail/cat.png"
                  alt=""
                  className="origin-center"
                />
              </div>
              <div className="text-center p-6">
                <h3 className="uppercase font-extrabold text-3xl">
                  Hot update
                </h3>
                <p className={workSansFont("opacity-75")}>
                  Found out various info related to in-game Lokapala here!
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t border-orange-500 pt-8 bg-cover">
          <Container>
            <div className="grid md:grid-cols-4 py-8 gap-16 md:gap4">
              <div className="flex justify-center items-center w-full">
                <img src="/logo-footer.png" alt="" className="w-full" />
              </div>
              <div className="flex flex-col md:justify-start items-center">
                <h3 className="mb-6 font-extrabold text-2xl uppercase text-orange-500">
                  menu
                </h3>
                <div>
                  <ul>
                    <li className="py-4 text-xl text-center md:text-left">
                      Updates
                    </li>
                    <li className="py-4 text-xl text-center md:text-left">
                      Event
                    </li>
                    <li className="py-4 text-xl text-center md:text-left">
                      Ksatriya
                    </li>
                    <li className="py-4 text-xl text-center md:text-left">
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className=" mb-6 font-extrabold text-2xl uppercase text-orange-500">
                  Install App
                </h3>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="cursor-pointer ">
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="cursor-pointer ">
                    <img src="/app-store.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                <div className="icon-wrap">
                  <img src="/icon-social/facebook.png" alt="" />
                </div>
                <div className="icon-wrap">
                  <img src="/icon-social/instagram.png" alt="" />
                </div>
                <div className="icon-wrap">
                  <img src="/icon-social/discord.png" alt="" />
                </div>
                <div className="icon-wrap">
                  <img src="/icon-social/youtube.png" alt="" />
                </div>
              </div>
            </div>
            <div className="py-6 border-t border-orange-500 flex md:flex-row flex-col items-center gap-4 justify-between">
              <span>
                Copyright © 2022 Anantarupa Studios. All Rights Reserved.
              </span>
              <ul className="flex gap-4">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Container>
        </footer>
      </main>
    </>
  );
}
