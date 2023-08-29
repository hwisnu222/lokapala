import React from "react";
import Image from "next/image";

// images
import { FaBars, FaXmark, FaCaretRight } from "react-icons/fa6";
import Logo from "@/assets/logo.png";
import LokapalaLogo from "@/assets/lokapala-logo.png";
import AnantarupaLogo from "@/assets/logo-anantarupa.png";
import Container from "./Container";

const menuHeader = ["game", "ksatriya", "news", "support"];

const iosPlatform = ["iPhone", "iPad", "iPod"];

export default function Header() {
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

  const isPlatform = () => {
    if (typeof window !== "undefined") {
      const platform = window.navigator.platform;

      return iosPlatform.includes(platform) ? "ios" : "android";
    }
  };
  return (
    <>
      {/* bottom menu mobile */}
      <div className="bottom-menu mx-4 rounded-full z-30 fixed bottom-2 md:hidden flex border-b-2 border-orange-500 bg-gray-950">
        <div
          className="rounded-full bg-white p-4 flex justify-center items-center cursor-pointer"
          onClick={handleBottomMenu}
        >
          <FaCaretRight
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
          {isPlatform() === "ios" ? (
            <img src="/app-store.png" alt="" className="mr-8 w-[40%]" />
          ) : (
            <img src="/google.png" alt="" className="mr-8 w-[40%]" />
          )}
        </div>
      </div>
      {/* Side Menu */}
      <div
        className={`side-menu hidden md:flex fixed  items-center right-4 translate-y-[20%] z-[100] ${
          sideMenu ? "" : "-mr-[250px]"
        }`}
      >
        <div
          className="arrow-side-menu cursor-pointer "
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

      {/* header desktop */}
      <header className="hidden md:block py-4 bg-gray-950 sticky top-0 z-50 shadow-md">
        <Container className="flex justify-between items-center">
          <h3>
            <Image src={Logo} fill={false} width={200} alt="logo" />
          </h3>
          <ul className="flex justify-between items-center gap-16 font-extrabold uppercase">
            {menuHeader.map((header: string, index: number) => (
              <li
                className="border-b-2 border-transparent hover:border-b-orange-500 py-2 "
                key={index}
              >
                {header}
              </li>
            ))}
          </ul>
        </Container>
      </header>

      {/* header mobile */}
      <header className="bg-gray-950  md:hidden sticky top-0 z-30">
        <Container className="flex justify-between items-center">
          <div>
            <Image src={AnantarupaLogo} fill={false} height={40} alt="logo" />
          </div>
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
          {menuHeader.map((header: string, index: number) => (
            <li
              className="font-extrabold text-2xl uppercase hover:text-orange-500"
              key={index}
            >
              {header}
            </li>
          ))}
        </ul>
        <div className="flex justify-end pt-6">
          <img src="/discord.png" alt="" />
        </div>
      </div>
    </>
  );
}
