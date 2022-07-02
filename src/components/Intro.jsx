import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-32">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-center mb-14">
        <img className="h-12" src="images/l-bracket.png" alt="" />
        <p className="text-xl font-medium w-12/12 mx-14">
          Our desire is to expose communities all across the world<br></br> to
          the gospel by starting{" "}
          <span className="font-extrabold text-customLime">
            GOSPEL SATURATED SCHOOLS
          </span>
        </p>
        <img className="h-12" src="images/r-bracket.png" alt="" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 items-center xl:grid-cols-12">
        <div className="col-span-6 justify-self-end mr-32">
          <h3 className="text-customBlue text-2xl tracking-wider">
            Planting Seeds<br></br> of the{" "}
            <span className="font-extrabold tracking-normal">GOSPEL</span>
          </h3>
          <p className="text-sm text-customBlue">ONE CLASSROOM AT A TIME</p>
        </div>
        <div className="col-span-6">
          <img src="images/map.png" alt="" />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 bg-cover bg-no-repeat bg-[url('../public/images/floor-bg.png')]">
        <div className="col-span-6">
          <img className="" src="images/home-girls.png" alt="" />
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center mr-44">
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
