import React from "react";
import Container from "./Container";
import { archivoFont, workSansFont } from "@/fonts";

export default function Lokapala() {
  return (
    <section className="part-2 relative h-[600px] bg-cover md:bg-auto bg-no-repeat bg-top md:h-auto  md:bg-center  md:object-cover width-full -mt-[100px] md:-mt-[70px]">
      {/* <div className="overlay-right absolute top-0 w-full h-full"></div> */}
      <Container className="grid md:grid-cols-2 gap-6  h-full">
        <div></div>
        <div className="flex justify-end md:justify-center pb-16 pt-44 flex-col items-start z-20">
          <h3 className={archivoFont("uppercase font-extrabold text-7xl mb-6")}>
            what is lokapala?
          </h3>
          <p className={workSansFont("mb-8")}>
            Be the chosen Ksatriya and decide the fate of the realms! Experience
            the first MOBA in South East Asia: Lokapala! Developed by Indonesian
            game developer, Anantarupa Studios.
          </p>
          <button className="uppercase">what&apos;s more</button>
        </div>
      </Container>
    </section>
  );
}
