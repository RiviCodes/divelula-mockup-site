import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center h-96 w-auto md:h-screen bg-contain xl:bg-contain bg-no-repeat bg-[url('../public/images/bg.png')]"
      id="#hero"
    >
      <img className="h-auto xl:w-20 xl:mb-24" src="images/play.png" alt="" />
      <h3 className="self-end xl:mr-10 text-4xl text-white">
        CALLED TO <span className="font-extrabold">GO</span>
      </h3>
    </section>
  );
}
