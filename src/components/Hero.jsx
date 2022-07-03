import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-start md:justify-center xl:justify-center items-center h-48 md:h-96 xl:h-96 w-auto bg-center bg-cover md:bg-cover xl:bg-cover bg-no-repeat bg-[url('../public/images/bg.png')]"
      id="#hero"
    >
      <img
        className="h-auto w-2/12 sm:w-1/12 xl:w-20 mb-auto mt-16 xl:mt-28 sm:pt-0  xl:pb-24"
        src="images/play.png"
        alt=""
      />
      <h3 className="self-end mr-1 sm:mr-2 xl:mr-10 text-2xl sm:text-3xl xl:text-4xl text-white">
        CALLED TO <span className="font-extrabold">GO</span>
      </h3>
    </section>
  );
}
