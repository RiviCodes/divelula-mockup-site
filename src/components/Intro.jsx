import React from "react";

export default function Intro() {
  return (
    <section className="flex flex-col items-center">
      {/* HEADER */}
      <div className="flex flex-row items-center justify-center">
        <img className="h-12" src="images/l-bracket.png" alt="" />
        <p className="font-medium w-12/12 mx-14">
          Our desire is to expose communities all across the world<br></br> to
          the gospel by starting{" "}
          <span className="font-extrabold text-customLime">
            GOSPEL SATURATED SCHOOLS
          </span>
        </p>
        <img className="h-12" src="images/r-bracket.png" alt="" />
      </div>
    </section>
  );
}
