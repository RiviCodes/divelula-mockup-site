import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col items-center">
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
    </section>
  );
}
