import React from "react";
import Container from "./Container";
import { archivoFont, workSansFont } from "@/fonts";

export default function Ksatriya() {
  return (
    <section className="part-3  relative mt-2 bg-top h-[800px] lg:bg-cover md:h-auto md:bg-no-repeat object-cover  w-full">
      <div className="overlay-left absolute top-0 w-full h-full"></div>
      <Container className="grid md:grid-cols-2 py-20 ">
        <div className="flex justify-end md:justify-center flex-col h-[700px] md:h-auto items-start z-10">
          <h3
            className={archivoFont("uppercase font-extrabold text-7xl mb-6 ")}
          >
            FIND OUT ABOUT KSATRIYA!
          </h3>
          <p className={workSansFont("mb-8")}>
            Be the chosen Ksatriya and decide the fate of the realms! Experience
            the first MOBA in South East Asia: Lokapala! Developed by Indonesian
            game developer, Anantarupa Studios.
          </p>
          <button className="uppercase">what&apos;s more</button>
        </div>
        <div></div>
      </Container>
    </section>
  );
}
