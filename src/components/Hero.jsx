import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-start xl:justify-center items-center h-96 w-auto md:h-screen bg-contain xl:bg-contain bg-no-repeat bg-[url('../public/images/bg.png')]"
      id="#hero"
    >
      <img
        className="h-auto w-2/12 xl:w-20 pt-10 sm:pt-0 pb-2 sm:pb-0 xl:pb-24"
        src="images/play.png"
        alt=""
      />
      <h3 className="self-end mr-2 sm:mr-0 xl:mr-10 text-3xl xl:text-4xl text-white">
        CALLED TO <span className="font-extrabold">GO</span>
      </h3>
    </section>
  );
}
