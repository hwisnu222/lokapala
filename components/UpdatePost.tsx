import React from "react";
import { workSansFont } from "@/fonts";

export default function UpdatePost() {
  return (
    <section className="grid md:grid-cols-2 gap-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="news hover:border-orange-500 border my-2" key={index}>
          <div className="overflow-hidden">
            <img
              src={index == 0 ? "/thumbnail/cat.png" : "/thumbnail/event.png"}
              alt=""
              className="origin-center w-full"
            />
          </div>
          <div className="text-center p-6">
            <h3 className="uppercase font-extrabold text-3xl">Hot update</h3>
            <p className={workSansFont("opacity-75")}>
              Found out various info related to in-game Lokapala here!
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
