import React from "react";
import Container from "./Container";
import { archivoFont, workSansFont } from "@/fonts";

export default function Svaka() {
  return (
    <section className="part-1 pb-32 bg-cover object-cover w-full">
      <Container className="grid md:grid-cols-3 items-center justify-center gap-4 mb-20">
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
                <h3 className="font-extrabold text-2xl uppercase ">hello</h3>
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
              "uppercase font-extrabold text-7xl mb-6 text-center md:text-left"
            )}
          >
            WELCOME TO SVAKA LOKAPALA!
          </h3>
          <p className={workSansFont("md:w-3/4 text-center md:text-left")}>
            Be the chosen Ksatriya and decide the fate of the realms! Experience
            the first MOBA in South East Asia: Lokapala! Developed by Indonesian
            game developer, Anantarupa Studios.
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
    </section>
  );
}
