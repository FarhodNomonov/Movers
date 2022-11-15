import React from "react";
// import img1 from "../../assets/images/man2.png";
// import img2 from "../../assets/images/man3.png";
// import img3 from "../../assets/images/man4.png";
import img4 from "../../assets/images/manss.png";

const Cards = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4  ">
          <div className=" h-60 rounded-2xl relative p-3 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1>ГРУЗЧИКИ</h1>
            <div className=" w-40 bg-blue-700 h-20 -skew-x-6 absolute left-10 top-20 rounded-2xl">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 -top-6"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className=" h-60 rounded-2xl relative p-3 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1>ГРУЗЧИКИ</h1>
            <div className=" w-40 bg-blue-700 h-20 -skew-x-6 absolute left-10 top-20 rounded-2xl">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 -top-6"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className=" h-60 rounded-2xl relative p-3 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1>ГРУЗЧИКИ</h1>
            <div className=" w-40 bg-blue-700 h-20 -skew-x-6 absolute left-10 top-20 rounded-2xl">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 -top-6"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className=" h-60 rounded-2xl relative p-3 hover:bg-[#0061cc1a] cursor-pointer shadow-2xl -shadow-gray-200">
            <h1>ГРУЗЧИКИ</h1>
            <div className=" w-40 bg-blue-700 h-20 -skew-x-6 absolute left-10 top-20 rounded-2xl">
              <img
                className="skew-x-6 relative left-20 w-100 h-30 -top-6"
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
