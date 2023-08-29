import React from "react";
import Container from "@/components/Container";
import { menuHeader } from "./Header";

export default function Footer() {
  return (
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
                {menuHeader.map((header: string, index: number) => (
                  <li
                    className="py-4 text-xl text-center md:text-left capitalize"
                    key={index}
                  >
                    {header}
                  </li>
                ))}
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
          <span>Copyright © 2022 Anantarupa Studios. All Rights Reserved.</span>
          <ul className="flex gap-4">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
