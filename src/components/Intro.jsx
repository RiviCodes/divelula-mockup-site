import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-20 xl:mt-32">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-center mb-14">
        <img
          className="h-12 hidden lg:block"
          src="images/l-bracket.png"
          alt=""
        />
        <p className="text-base text-center xl:text-start xl:text-xl font-medium xl:w-12/12 mx-4 xl:mx-14">
          Our desire is to expose communities all across the world
          <br className="hidden xl:block"></br> to the gospel by starting{" "}
          <span className="font-extrabold text-customLime">
            GOSPEL SATURATED SCHOOLS
          </span>
        </p>
        <img
          className="h-12 hidden lg:block"
          src="images/r-bracket.png"
          alt=""
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 items-center xl:grid-cols-12">
        <div className="cols-span-1 xl:col-span-6 justify-self-center xl:justify-self-end mb-9 xl:mr-32">
          <h3 className="text-center xl:text-start text-2xl tracking-wider text-customBlue">
            Planting Seeds<br></br> of the{" "}
            <span className="font-extrabold tracking-normal">GOSPEL</span>
          </h3>
          <p className="text-sm text-customBlue">ONE CLASSROOM AT A TIME</p>
        </div>
        <div className="cols-span-1 xl:col-span-6 mb-12 xl:mb-0">
          <img src="images/map.png" alt="" />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-cover bg-no-repeat bg-[url('../public/images/floor-bg.png')]">
        <div className="order-2 xl:order-1 cols-span-1 xl:col-span-6 flex justify-center">
          <img
            className="w-9/12 sm:w-8/12 lg:w-7/12 xl:w-7/12"
            src="images/home-girls.png"
            alt=""
          />
        </div>
        <div className="order-1 xl:order-2 cols-span-1 xl:col-span-6 flex flex-col items-center justify-center my-20 xl:my-0 xl:mr-44">
          <div className="border-2 rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              className="w-3/12 -mt-16 mb-2"
              src="images/quotes.png"
              alt=""
            />
            <p className="text-xl font-medium italic text-white mb-1">
              "The harvest is plentiful<br></br> but the laborers are few"
            </p>
            <span className="text-sm font-bold text-white mb-3">LUKE 10:2</span>
            <button className="btn mx-2 -mb-12 px-6 py-1 rounded-full text-sm font-semibold text-white bg-customLime hover:bg-customLimeHover transition ease-in-out delay">
              GO TO THE HARVEST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
