import React from "react";
import bgImg from "../../assets/images/Vector.png";

function Works() {
  const backgroundImageStyle = {
    backgroundImage: `url("${bgImg}")`,
    backgroundSize: "cover",
  };

  return (
    <div className=" text-white " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <div className="w-12">
             
            </div>
            <h2 className="text-xl uppercase font-bold">Become a host</h2>
            <h1 className="text-6xl font-bold">
              Host your space, share your world
            </h1>
            <p className="text-lg">
              The art of hosting is rooted in thoughtful design. Share your
              unique aesthetic with guests and earn extra income on a schedule
              that works for you.
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
              Try hosting
            </button>
          </div>
        </div>
      </div>
  );
}

export default Works;
